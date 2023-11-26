import "reflect-metadata";
import { DataSource } from "typeorm";
// import { User } from "./entity/User"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 6000,
  username: "postgres",
  password: "28101997",
  database: "APP",
  synchronize: true,
  logging: false,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});
