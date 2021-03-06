import { WhereOptions } from 'sequelize/types';
import { Order } from '../models';
import { OrderAttributes, OrderStatic } from '../models/orderModel';
import { Menu } from '../types';

export class OrderRepository {
  model: OrderStatic;

  constructor() {
    this.model = Order;
  }

  async createOrder(
    clientId: string,
    restaurantId: string,
    courierId: string,
    products: Menu,
    amount: number,
    deliveryTime: number,
    address: string
  ): Promise<OrderAttributes> {
    return await this.model
      .create({
        clientId,
        restaurantId,
        courierId,
        products,
        amount,
        deliveryTime,
        address,
      })
      .then((result) => result.toJSON() as OrderAttributes)
      .catch((e) => {
        throw e;
      });
  }

  async getOrders(options: WhereOptions): Promise<OrderAttributes[]> {
    return await this.model
      .findAll({
        where: options,
      })
      .then((result) => result as OrderAttributes[])
      .catch((e) => {
        throw e;
      });
  }
}
