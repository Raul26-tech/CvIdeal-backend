import { inject, optional } from "inversify";
import { DataSource, EntityManager } from "typeorm";
import { AppDataSource } from "../db/connect.db";

export class BaseRepository {
  protected datasource: DataSource | EntityManager;

  constructor(
    @inject("Manager")
    @optional()
    private manager?: EntityManager
  ) {
    this.datasource = this.manager ? this.manager : AppDataSource;
  }
}
