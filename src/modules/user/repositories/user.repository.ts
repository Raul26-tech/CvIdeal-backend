import { injectable } from "inversify";
import { BaseRepository } from "src/framework/repositories/base-repository.repository";
import { EntityManager, Repository } from "typeorm";
import { User } from "../entities/user.entity";

@injectable()
export class UserRepository extends BaseRepository {
  private repository: Repository<User>;

  constructor(manager?: EntityManager) {
    super(manager);
    this.repository = this.datasource.getRepository(User);
  }

  async create() {}
}
