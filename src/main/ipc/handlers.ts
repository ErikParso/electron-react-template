import { ipcMain } from 'electron';
import { getAppDataSource } from '../database/data-source';
import { Company } from '../database/entities/Company';

export function registerHandlers(): void {
  ipcMain.handle('get-companies', async () => {
    const repo = getAppDataSource().getRepository(Company);
    return repo.find({ relations: ['employees'] });
  });
}
