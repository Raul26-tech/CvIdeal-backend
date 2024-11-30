import { DeepPartial } from "./../../../../node_modules/typeorm/common/DeepPartial.d";
import { injectable } from "inversify";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { CreateUserDto } from "../dtos/create-user.dto";
import { AppDataSource } from "src/framework/db/connect.db";

@injectable()
export class UserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create(userData: DeepPartial<CreateUserDto>) {
    const user = this.repository.create(userData);

    return await this.repository.save(user);
  }

  async findByEmail(email: string) {
    const user = await this.repository.findOne({
      where: { email },
    });

    return user;
  }

  async findById(id: string) {
    const user = await this.repository.findOne({
      where: { id },
    });

    return user;
  }
}
