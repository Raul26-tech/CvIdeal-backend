import { inject, injectable } from "inversify";
import { TaskRepository } from "../repositories/task.repository";
import { PaginationDTO } from "src/shared/dtos/paginate.dto";
import redisClient from "src/framework/db/redis-cofig";

@injectable()
export class ListTaskService {
  constructor(
    @inject(TaskRepository) private readonly taskRepository: TaskRepository
  ) {}

  async execute({ page, paginate, perPage }: PaginationDTO) {
    const cacheKey = `tasks_page_${page}_perPage_${perPage}`;

    // Verificar se existe cache
    const cachedData = await redisClient.get(cacheKey);

    if (cachedData) {
      return JSON.parse(cachedData); // Retorna os dados do cache
    }

    const [tasks, totalTasks] = await this.taskRepository.findAndCount({
      page,
      paginate,
      perPage,
    });

    const result = {
      tasks,
      totalTasks,
      totalPages: paginate ? Math.ceil(totalTasks / perPage) : 1,
      currentPage: paginate ? Number(page) : 1,
    };

    // Salvar os dados no cache com expiração de 5 minutos (300 segundos)
    await redisClient.set(cacheKey, JSON.stringify(result), "EX", 300);

    return result;
  }
}
