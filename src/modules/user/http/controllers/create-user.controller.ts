import { Request, Response } from "express";
import { container } from "src/framework/container/inversify.config";
import { CreateUserService } from "../../services/create-user.service";
import { inject, injectable } from "inversify";

@injectable()
export class CreateUserController {
  constructor(
    @inject(CreateUserService)
    private createUserService: CreateUserService
  ) {}

  async handle(request: Request, response: Response) {
    const { name, email, password, passwordConfirm, emailConfirm, phone } =
      request.body;

    const user = await this.createUserService.execute({
      name,
      email,
      password,
      passwordConfirm,
      emailConfirm,
      phone,
    });

    return response.status(200).json(user);
  }
}
