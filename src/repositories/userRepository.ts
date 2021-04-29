import { ClientAttributes, ClientStatic } from '../models/clientModel';
import { CourierStatic } from '../models/courierModel';
//better error handling

export class UserRepository {
  model: ClientStatic | CourierStatic;

  constructor(model: ClientStatic | CourierStatic) {
    this.model = model;
  }

  async createUser(name: string): Promise<ClientAttributes> {
    return await this.model
      .create({ name })
      .then((result) => result.toJSON() as ClientAttributes)
      .catch((e) => {
        throw e;
      });
  }

  async getUser(id: string): Promise<ClientAttributes | null> {
    return await this.model
      .findByPk(id)
      .then((result) =>
        result === null ? null : (result.toJSON() as ClientAttributes)
      )
      .catch((e) => {
        throw e;
      });
  }

  async updateUser(
    id: string,
    params: Partial<ClientAttributes>
  ): Promise<ClientAttributes | null> {
    return await this.model
      .update(params, { where: { id }, returning: true })
      .then((result) =>
        result[1][0] !== undefined
          ? (result[1][0].toJSON() as ClientAttributes)
          : null
      )
      .catch((e) => {
        throw e;
      });
  }

  async deleteUser(id: string): Promise<ClientAttributes | null> {
    return await this.model
      .findByPk(id)
      .then((result) =>
        result === null
          ? null
          : this.model
              .destroy({ where: { id } })
              .then(() => result.toJSON() as ClientAttributes)
              .catch((e) => {
                throw e;
              })
      )
      .catch((e) => {
        throw e;
      });
  }

  async getRandomCourier(): Promise<ClientAttributes | null> {
    const seq = this.model.sequelize;
    return await this.model
      .findOne({
        order: seq?.random(),
      })
      .then((courier) => {
        return courier === null
          ? null
          : (courier?.toJSON() as ClientAttributes);
      })
      .catch((e) => {
        throw e;
      });
  }
}
