import { LoginService } from "@modules/auth/services/login.service";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class AuthController {
  constructor(@inject(LoginService) private loginService: LoginService) {}

  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const login = await this.loginService.execute({
      email,
      password,
    });

    return response.status(200).json(login);
  }
}
