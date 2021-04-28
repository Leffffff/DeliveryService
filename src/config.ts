import { PostgresConfig } from './types';
import 'dotenv/config';

export const pgConfig: Partial<PostgresConfig> = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT) || undefined,
};
