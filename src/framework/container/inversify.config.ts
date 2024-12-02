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
import { CreateTaskService } from "@modules/task/services/create-task.service";
import { CreateTaskController } from "@modules/task/http/controllers/create-task.controller";
import { TaskRepository } from "@modules/task/repositories/task.repository";
import { UpdateTaskController } from "@modules/task/http/controllers/update-task.controller";
import { UpdateTaskService } from "@modules/task/services/update-task.service";
import { DeleteTaskService } from "@modules/task/services/delete-task.service";
import { DeleteTaskController } from "@modules/task/http/controllers/delete-task.controller";
import { ListTaskService } from "@modules/task/services/list-task.service";
import { ListTaskController } from "@modules/task/http/controllers/list-task.controller";

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
container.bind<AuthController>(AuthController).toSelf();

// Serviços de tarfeas
container.bind<TaskRepository>(TaskRepository).toSelf();
container.bind<CreateTaskService>(CreateTaskService).toSelf();
container.bind<UpdateTaskService>(UpdateTaskService).toSelf();
container.bind<ListTaskService>(ListTaskService).toSelf();
container.bind<DeleteTaskService>(DeleteTaskService).toSelf();

container.bind<CreateTaskController>(CreateTaskController).toSelf();
container.bind<UpdateTaskController>(UpdateTaskController).toSelf();
container.bind<DeleteTaskController>(DeleteTaskController).toSelf();
container.bind<ListTaskController>(ListTaskController).toSelf();

export { container };
