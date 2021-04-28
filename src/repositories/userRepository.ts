import { Client } from '../types';
import { Pool } from 'pg';
import { pgConfig } from '../config';
//better error handling

export class UserRepository {
  table: string;
  dataBase: Pool;

  constructor(table: string) {
    this.table = table;
    this.dataBase = new Pool(pgConfig || undefined);
  }

  async createUser(name: string): Promise<Client> {
    const queryString = `INSERT INTO ${this.table} (name) VALUES ($1) RETURNING *`;
    return await this.dataBase
      .query(queryString, [name])
      .then((result) => result.rows[0])
      .catch((err) => {
        throw err;
      });
  }

  async getUser(id: string): Promise<Client | Error> {
    const queryString = `SELECT * FROM ${this.table} WHERE id = $1`;
    return await this.dataBase
      .query(queryString, [id])
      .then((v) => v.rows[0])
      .catch((err) => {
        throw err;
      });
  }

  async updateUser(id: string, { name }: any): Promise<Client[] | Error> {
    const queryString = `UPDATE ${this.table} SET name = $1 WHERE id = $2 RETURNING *`;
    return await this.dataBase
      .query(queryString, [name, id])
      .then((v) => v.rows[0])
      .catch((err) => {
        throw err;
      });
  }

  async deleteUser(id: string): Promise<Client> {
    const queryString = `DELETE FROM ${this.table} WHERE id = $1 RETURNING *`;
    return await this.dataBase
      .query(queryString, [id])
      .then((result) => result.rows[0])
      .catch((err) => {
        throw err;
      });
  }
}
