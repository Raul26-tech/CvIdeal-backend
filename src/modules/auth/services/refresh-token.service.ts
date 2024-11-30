import { inject, injectable } from "inversify";

import { RefreshTokenDTO, RefreshTokenSchema } from "../dtos/refresh-token.dto";
import { UserRepository } from "@modules/user/repositories/user.repository";
import { SignTokenService } from "./sign-in-token.service";
import { Unauthorized } from "src/framework/http/errors/Unauthorized";

@injectable()
class RefreshTokenService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository,
    @inject(SignTokenService)
    private signTokenService: SignTokenService
  ) {}

  async execute({ refreshToken, userId }: RefreshTokenDTO) {
    RefreshTokenSchema.parse({ refreshToken });

    if (refreshToken.length !== 128) {
      throw new Unauthorized("O refresh token informado é inválido.");
    }

    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Unauthorized("O usuário informado não foi encontrado.");
    }

    // Gerar novos tokens
    const { accessToken, refreshToken: newRefreshToken } =
      this.signTokenService.execute({
        userId: user.id,
        email: user.email,
      });

    return {
      accessToken,
      refreshToken: newRefreshToken,
    };
  }
}

export { RefreshTokenService };
