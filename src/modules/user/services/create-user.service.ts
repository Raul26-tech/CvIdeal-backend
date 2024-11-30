import { inject, injectable } from "inversify";
import { UserRepository } from "../repositories/user.repository";
import { CreateUserDto, createUserSchema } from "../dtos/create-user.dto";
import { hashGenerate } from "@utils/password";
import { Conflict } from "src/framework/http/errors/Conflict";

@injectable()
export class CreateUserService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository
  ) {}

  async execute({
    name,
    email,
    password,
    passwordConfirm,
    emailConfirm,
    phone,
  }: CreateUserDto) {
    // Validando os dados de entrada
    createUserSchema.parse({
      name,
      email,
      emailConfirm,
      password,
      passwordConfirm,
      phone,
    });

    const userEmail = await this.userRepository.findByEmail(email);

    if (userEmail) {
      throw new Conflict("O e-mail informado já está em uso");
    }

    const hashedPassword = await hashGenerate(password);

    console.log(hashedPassword);

    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      status: "active",
      phone,
    });

    return user;
  }
}
