import { inject, injectable } from "inversify";
import { TaskRepository } from "../repositories/task.repository";
import { NotFound } from "src/framework/http/errors/NotFound";
import { UpdateTaskDTO, UpdateTaskSchema } from "../dtos/update-task.dto";

@injectable()
export class UpdateTaskService {
  constructor(@inject(TaskRepository) private taskRepository: TaskRepository) {}

  async execute(id: string, { title, description, status }: UpdateTaskDTO) {
    // Validando os dados de entrada
    UpdateTaskSchema.parse({
      title,
      description,
      status,
    });

    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new NotFound("A tarefa informada não foi encontrada");
    }

    const updatedTask = await this.taskRepository.update({
      ...task,
      title,
      description,
      status,
    });

    return updatedTask;
  }
}
