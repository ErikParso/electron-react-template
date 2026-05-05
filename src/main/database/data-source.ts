import { DataSource } from 'typeorm';
import path from 'path';
import { app } from 'electron';
import { Company, Employee } from './entities';

let _source: DataSource | null = null;

export function getAppDataSource(): DataSource {
  if (!_source) {
    _source = new DataSource({
      type: 'sqlite',
      database: path.join(app.getPath('userData'), 'app.db'),
      entities: [Company, Employee],
      synchronize: true,
      logging: false,
    });
  }
  return _source;
}
