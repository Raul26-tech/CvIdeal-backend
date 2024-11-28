import { UserRepository } from "@modules//user/repositories/user.repository";
import { Container } from "inversify";

const container = new Container();

container
  .bind<UserRepository>("UserRepository")
  .to(UserRepository)
  .inSingletonScope();

export { container };
