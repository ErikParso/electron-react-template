import { DataSource } from "typeorm";
import { Company } from "./entities/Company";
import { Employee } from "./entities/Employee";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "C:/testApp/app.db",
  entities: [Company, Employee],
  synchronize: true,
  logging: false,
});
