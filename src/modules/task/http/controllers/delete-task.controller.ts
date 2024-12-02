import { DeleteTaskService } from "@modules/task/services/delete-task.service";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class DeleteTaskController {
  constructor(
    @inject(DeleteTaskService) private deleteTaskService: DeleteTaskService
  ) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    await this.deleteTaskService.execute(id);
    return response
      .status(200)
      .json({ message: "tarefa deletada com sucesso" });
  }
}
