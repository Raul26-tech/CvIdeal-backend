import auth from "@config/auth";
import { injectable } from "inversify";
import { sign } from "jsonwebtoken";
import { randomBytes } from "crypto";
import { SignTokenServiceDTO } from "../dtos/sign-in-token.dto";

@injectable()
class SignTokenService {
  execute({ userId, email }: SignTokenServiceDTO) {
    // Gerar o token JWT
    const accessToken = sign({}, auth.secretToken, {
      subject: userId,
      expiresIn: `${auth.expiresInToken}d`, // Exemplo: "1d" ou "15m"
    });

    // Gerar o refresh token
    const refreshToken = randomBytes(64).toString("hex");

    return {
      accessToken,
      refreshToken,
    };
  }
}

export { SignTokenService };
