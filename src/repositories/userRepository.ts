import { User } from '../types';
import { Client } from '../models';
import { ClientAttributes } from '../models/clientModel';
//better error handling

export class UserRepository {
  table: string;

  constructor(table: string) {
    this.table = table;
  }

  async createUser(name: string): Promise<ClientAttributes | Error> {
    return await Client.create({ name })
      .then(({ dataValues }: any) => dataValues)
      .catch((e) => {
        throw e;
      });
  }

  async getUser(id: string): Promise<ClientAttributes | Error> {
    return await Client.findByPk(id)
      .then(({ dataValues }: any) => dataValues)
      .catch((e) => {
        throw e;
      });
  }

  async updateUser(
    id: string,
    params: Partial<ClientAttributes>
  ): Promise<ClientAttributes | Error> {
    return await Client.update(params, { where: { id }, returning: true })
      .then(([_, [{ dataValues }]]: any) => dataValues)
      .catch((e) => {
        throw e;
      });
  }

  async deleteUser(id: string): Promise<ClientAttributes | Error> {
    return await Client.findByPk(id)
      .then(({ dataValues }: any) =>
        Client.destroy({ where: { id } })
          .then(() => dataValues)
          .catch((e) => {
            throw e;
          })
      )
      .catch((e) => {
        throw e;
      });
  }
}
