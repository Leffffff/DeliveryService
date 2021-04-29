import { PostgresConfig } from './types';
import 'dotenv/config';

export const pgConfig: PostgresConfig = (() => {
  if (
    !process.env.PG_USER ||
    !process.env.PG_HOST ||
    !process.env.PG_DATABASE ||
    !process.env.PG_PASSWORD ||
    !process.env.PG_PORT
  )
    throw new Error('You must specify db credentials');
  return {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: Number(process.env.PG_PORT),
  };
})();
