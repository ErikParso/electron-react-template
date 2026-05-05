import { ipcMain } from "electron";
import { AppDataSource } from "../database/data-source";
import { Company } from "../database/entities/Company";

export function registerHandlers(): void {
  ipcMain.handle("get-companies", async () => {
    const repo = AppDataSource.getRepository(Company);
    return repo.find({ relations: ["employees"] });
  });
}
