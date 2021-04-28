import { Client } from '../types';
import { Pool } from 'pg';

//better error handling

export class ClientRepository {
  dataBase: Pool;

  constructor() {
    this.dataBase = new Pool({
      user: 'lev',
      host: 'localhost',
      database: 'api',
      password: 'lev',
      port: 5432,
    });
  }

  async getClient(clientId: string): Promise<Client[] | Error> {
    return await this.dataBase
      .query('SELECT * FROM clients WHERE id = $1', [clientId])
      .then((v) => v.rows)
      .catch((err) => {
        throw err;
      });
  }

  async createClient(name: string): Promise<Client> {
    await this.dataBase
      .query('INSERT INTO clients (name) VALUES ($1)', [name])
      .then((result) => result)
      .catch((err) => {
        throw err;
      });

    return {
      name,
    };
  }
}
