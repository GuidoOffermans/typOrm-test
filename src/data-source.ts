import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from './User';

let charset = 'utf8mb4';
try {
  const extras = JSON.parse(process.env.TYPEORM_DRIVER_EXTRA);
  charset = extras.charset || charset;
} catch {
  // Don't change the charset value.
}

const databaseConfig: DataSourceOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  timezone: '+00:00',
  port: 3306,
  username: 'root',
  password: '',
  database: 'test',
  synchronize: false,
  migrationsRun: false,
  migrationsTableName: 'MigrationsTypeORM',
  cache: false,
  logging: 'all',
  charset,
  migrations: ['./src/migrations/**/*.{ts,js}'],
  entities: [User],
};

export const AppDataSource: DataSource = new DataSource(databaseConfig);
