import { DataSource, EntityManager } from "typeorm";
import { AppDataSource } from "../db/connect.db";
import { inject, injectable, optional } from "inversify";

@injectable()
export class BaseRepository {
  protected datasource: DataSource | EntityManager;

  constructor(
    @inject("Manager")
    @optional()
    private manager?: EntityManager
  ) {
    this.datasource = this.manager || AppDataSource;
  }
}
