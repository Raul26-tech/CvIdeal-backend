import { inject, injectable } from "inversify";
import { CreateTaskService } from "../../services/create-task.service";
import { Request, Response } from "express";

@injectable()
export class CreateTaskController {
  constructor(
    @inject(CreateTaskService) private createTaskService: CreateTaskService
  ) {}

  async handle(request: Request, response: Response) {
    const userId = request.user.id;
    const { title, description } = request.body;

    const task = await this.createTaskService.execute({
      userId,
      title,
      description,
    });

    return response.status(200).json(task);
  }
}
