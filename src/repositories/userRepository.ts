import { ClientAttributes, ClientStatic } from '../models/clientModel';
import { CourierStatic } from '../models/courierModel';
//better error handling

export class UserRepository {
  model: ClientStatic | CourierStatic;

  constructor(model: ClientStatic | CourierStatic) {
    this.model = model;
  }

  async createUser(name: string): Promise<ClientAttributes | Error> {
    return await this.model
      .create({ name })
      .then(({ dataValues }: any) => dataValues)
      .catch((e) => {
        throw e;
      });
  }

  async getUser(id: string): Promise<ClientAttributes | Error> {
    return await this.model
      .findByPk(id)
      .then(({ dataValues }: any) => dataValues)
      .catch((e) => {
        throw e;
      });
  }

  async updateUser(
    id: string,
    params: Partial<ClientAttributes>
  ): Promise<ClientAttributes | Error> {
    return await this.model
      .update(params, { where: { id }, returning: true })
      .then(([_, [{ dataValues }]]: any) => dataValues)
      .catch((e) => {
        throw e;
      });
  }

  async deleteUser(id: string): Promise<ClientAttributes | Error> {
    return await this.model
      .findByPk(id)
      .then(({ dataValues }: any) =>
        this.model
          .destroy({ where: { id } })
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
