import { inject, injectable } from "inversify";
import { TaskRepository } from "../repositories/task.repository";
import { NotFound } from "src/framework/http/errors/NotFound";
import { DeleteUserSchema } from "../dtos/delete-task.dto";

@injectable()
export class DeleteTaskService {
  constructor(@inject(TaskRepository) private taskRepository: TaskRepository) {}

  async execute(id: string) {
    DeleteUserSchema.parse({ id });

    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new NotFound("A tarefa informada não foi encontrada");
    }

    await this.taskRepository.delete(id);
  }
}
