import * as sequelize from 'sequelize';
import { pgConfig } from '../config';
import { ClientFactory } from './clientModel';
import { CourierFactory } from './courierModel';
import { OrderFactory } from './orderModel';
import { RestaurantFactory } from './restaurantModel';

export const dbConfig = new sequelize.Sequelize(
  pgConfig.database,
  pgConfig.user,
  pgConfig.password,
  {
    port: pgConfig.port || 54320,
    host: pgConfig.host || 'localhost',
    dialect: 'postgres',
    pool: {
      min: 0,
      max: 5,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export const Client = ClientFactory(dbConfig);
export const Courier = CourierFactory(dbConfig);
export const Restaurant = RestaurantFactory(dbConfig);
export const Order = OrderFactory(dbConfig);

Client.hasMany(Order);
Courier.hasMany(Order);

// Order.hasOne(Client);
// Order.hasOne(Courier);
// Order.hasOne(Restaurant);
