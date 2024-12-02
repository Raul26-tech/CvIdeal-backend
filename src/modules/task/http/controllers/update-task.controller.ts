import { UpdateTaskService } from "@modules/task/services/update-task.service";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class UpdateTaskController {
  constructor(
    @inject(UpdateTaskService) private updateTaskService: UpdateTaskService
  ) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, description, status } = request.body;

    const task = await this.updateTaskService.execute(id, {
      title,
      description,
      status,
    });

    return response.status(201).json(task);
  }
}
