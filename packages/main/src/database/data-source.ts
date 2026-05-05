import path from "path";
import { DataSource } from "typeorm";
import { Company } from "./entities/Company";
import { Employee } from "./entities/Employee";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.join(__dirname, "../../app.db"),
  entities: [Company, Employee],
  synchronize: true,
  logging: false,
});
