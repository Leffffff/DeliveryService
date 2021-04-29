import { Restaurant } from '../models';
import {
  RestaurantAttributes,
  RestaurantStatic,
} from '../models/restaurantModel';
import { Menu } from '../types';

export class RestaurantRepository {
  model: RestaurantStatic;

  constructor() {
    this.model = Restaurant;
  }

  async createRestaurant(
    name: string,
    menu = [] as Menu
  ): Promise<RestaurantAttributes> {
    return await this.model
      .create({ name, menu })
      .then((result) => result.toJSON() as RestaurantAttributes)
      .catch((e) => {
        throw e;
      });
  }

  async getRestaurant(id: string): Promise<RestaurantAttributes | null> {
    return await this.model
      .findByPk(id)
      .then((result) =>
        result === null ? null : (result.toJSON() as RestaurantAttributes)
      )
      .catch((e) => {
        throw e;
      });
  }

  async updateRestaurant(
    id: string,
    { name, menu }: Partial<RestaurantAttributes>
  ): Promise<RestaurantAttributes | null> {
    const restaurant = await this.model.findByPk(id);
    const newMenu = [...(restaurant ? restaurant.menu : []), ...(menu || [])];

    return restaurant !== null
      ? await this.model
          .update({ name, menu: newMenu }, { where: { id }, returning: true })
          .then((result) =>
            result[1][0] !== undefined
              ? (result[1][0].toJSON() as RestaurantAttributes)
              : null
          )
          .catch((e) => {
            throw e;
          })
      : null;
  }

  async deleteRestaurant(id: string): Promise<RestaurantAttributes | null> {
    return await this.model
      .findByPk(id)
      .then((result) =>
        result === null
          ? null
          : this.model
              .destroy({ where: { id } })
              .then(() => result.toJSON() as RestaurantAttributes)
              .catch((e) => {
                throw e;
              })
      )
      .catch((e) => {
        throw e;
      });
  }
}
