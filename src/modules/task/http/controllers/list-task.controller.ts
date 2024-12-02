import { ListTaskService } from "@modules/task/services/list-task.service";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { PaginationSchema } from "src/shared/dtos/paginate.dto";

@injectable()
export class ListTaskController {
  constructor(
    @inject(ListTaskService) private listTaskService: ListTaskService
  ) {}

  async handle(request: Request, response: Response) {
    const paginationParams = PaginationSchema.parse({
      paginate: request.query.paginate,
      page: request.query.page,
      perPage: request.query.perPage,
    });

    const listTasks = await this.listTaskService.execute({
      ...paginationParams,
    });

    return response.status(200).json(listTasks);
  }
}
