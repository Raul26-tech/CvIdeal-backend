import { UserRepository } from "@modules/user/repositories/user.repository";
import { inject, injectable } from "inversify";
import { LoginServiceDTO, loginServiceSchema } from "../dtos/login.dto";
import { BadRequest } from "src/framework/http/errors/BadRequest";
import { hashCompare } from "@utils/password";
import { SignTokenService } from "./sign-in-token.service";

@injectable()
class LoginService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository,
    @inject(SignTokenService)
    private signTokenService: SignTokenService
  ) {}

  async execute({ email, password }: LoginServiceDTO) {
    loginServiceSchema.parse({ email, password });

    // Localizar o usuário
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new BadRequest("Usuário ou senha incorreto(s).");
    }

    // Verificar se a senha está correta
    const passwordMatch = await hashCompare(password, user.password);
    if (!passwordMatch) {
      throw new BadRequest("Usuário ou senha incorreto(s).");
    }

    // Gerar os tokens (access e refresh)
    const { accessToken, refreshToken } = this.signTokenService.execute({
      userId: user.id,
      email: user.email,
    });

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
}

export { LoginService };
