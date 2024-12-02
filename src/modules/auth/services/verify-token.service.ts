import { inject, injectable } from "inversify";

import auth from "@config/auth";
import { verify } from "jsonwebtoken";
import { UserRepository } from "@modules/user/repositories/user.repository";
import { VerifyTokenDTO } from "../dtos/verify-token.dto";
import { Unauthorized } from "src/framework/http/errors/Unauthorized";

interface Payload {
  sub: string;
}

@injectable()
export class VerifyTokenService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository
  ) {}

  async execute({ bearerToken, ignoreExpiration = false }: VerifyTokenDTO) {
    if (!bearerToken) {
      throw new Unauthorized("Nenhum token de autenticação informado.");
    }

    const [, token] = bearerToken.split(" ");

    // Verificar o token
    let payload: Payload;
    try {
      payload = verify(token, auth.secretToken, {
        ignoreExpiration,
      }) as Payload;
    } catch {
      throw new Unauthorized("Token de autenticação inválido.");
    }

    // Adquirir dados do usuário
    const user = await this.userRepository.findById(payload.sub);
    if (!user || user.status !== "active") {
      throw new Unauthorized("Usuário inválido ou inativo.");
    }

    return { user };
  }
}
