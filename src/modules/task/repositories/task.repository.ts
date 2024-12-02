import { injectable } from "inversify";
import {
  FindManyOptions,
  FindOperator,
  FindOptionsWhere,
  ILike,
  In,
  Not,
  Repository,
} from "typeorm";
import { Task } from "../entities/task.entity";
import { AppDataSource } from "src/framework/db/connect.db";
import { CreateTaskDTO } from "../dtos/create-task.dto";
import { UpdateTaskDTO } from "../dtos/update-task.dto";
import { PaginationDTO } from "src/shared/dtos/paginate.dto";
import { ListTaskDTO } from "../dtos/list-task.dto";

@injectable()
export class TaskRepository {
  private repository: Repository<Task>;
  constructor() {
    this.repository = AppDataSource.getRepository(Task);
  }

  async create(data: CreateTaskDTO) {
    const task = this.repository.create(data);
    return await this.repository.save(task);
  }

  async update(data: UpdateTaskDTO) {
    await this.repository.save(data);

    return await this.findById(data.id);
  }

  async findAndCount({ paginate, page, perPage }: PaginationDTO) {
    const tasks = await this.repository.findAndCount({
      ...(paginate && {
        skip: (page - 1) * perPage,
        take: perPage,
      }),
      select: {
        id: true,
        title: true,
        description: true,
      },
      withDeleted: true,
    });
    return tasks;
  }

  async delete(id: string) {
    await this.repository.delete(id);
  }

  async findById(id: string) {
    const task = await this.repository.findOne({
      where: { id },
    });

    return task;
  }
}
