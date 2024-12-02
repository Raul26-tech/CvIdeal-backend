import { inject, injectable } from "inversify";
import { TaskRepository } from "../repositories/task.repository";
import { CreateTaskDTO, TaskSchema } from "../dtos/create-task.dto";
import { UserRepository } from "@modules/user/repositories/user.repository";
import { NotFound } from "src/framework/http/errors/NotFound";

@injectable()
export class CreateTaskService {
  constructor(
    @inject(TaskRepository) private taskRepository: TaskRepository,
    @inject(UserRepository) private userRepository: UserRepository
  ) {}

  async execute({ title, description, userId }: CreateTaskDTO) {
    // Validando os dados de entrada
    TaskSchema.parse({
      title,
      description,
    });

    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new NotFound("O usuário informado não foi encontrado");
    }

    const task = this.taskRepository.create({
      title,
      description,
      status: "pending",
      userId: user.id,
    });

    return task;
  }
}
