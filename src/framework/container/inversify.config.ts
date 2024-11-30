import { Container } from "inversify";
import { UserRepository } from "@modules/user/repositories/user.repository";
import { CreateUserService } from "@modules/user/services/create-user.service";
import { CreateUserController } from "@modules/user/http/controllers/create-user.controller";
import { DataSource, EntityManager } from "typeorm";
import { AppDataSource } from "../db/connect.db";
import { LoginService } from "@modules/auth/services/login.service";
import { SignTokenService } from "@modules/auth/services/sign-in-token.service";
import { RefreshTokenService } from "@modules/auth/services/refresh-token.service";
import { VerifyTokenService } from "@modules/auth/services/verify-token.service";
import { AuthController } from "@modules/auth/http/controllers/auth.controller";

const container = new Container();

// Registrar o DataSource
container.bind<DataSource>("DataSource").toConstantValue(AppDataSource);

// Registrar o EntityManager usando o DataSource
container.bind<EntityManager>("EntityManager").toDynamicValue((context) => {
  const dataSource = context.container.get<DataSource>("DataSource");
  return dataSource.manager;
});

// Serviços de usuário
container.bind<UserRepository>(UserRepository).toSelf();
container.bind<CreateUserService>(CreateUserService).toSelf();
container.bind<CreateUserController>(CreateUserController).toSelf();

// Serviços de autenticação
container.bind<LoginService>(LoginService).toSelf();
container.bind<SignTokenService>(SignTokenService).toSelf();
container.bind<RefreshTokenService>(RefreshTokenService).toSelf();
container.bind<VerifyTokenService>(VerifyTokenService).toSelf();
// Registrar AuthController manualmente
container.bind<AuthController>(AuthController).toSelf();

export { container };
