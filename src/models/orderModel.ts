import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface OrderAttributes {
  id?: number;
  clientId: string;
  restaurantId: string;
  courierId: string;
  products: Record<string, unknown>[];
  amount: number;
  createdAt?: Date;
  updatedAt?: Date;
  deliveryTime: number;
  address: string;
}

export interface OrderModel extends Model<OrderAttributes>, OrderAttributes {}

export class Order extends Model<OrderModel, OrderAttributes> {}

export type OrderStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): OrderModel;
};

export function OrderFactory(sequelize: Sequelize): OrderStatic {
  return <OrderStatic>sequelize.define('orders', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    courierId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    restaurantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    products: {
      type: DataTypes.ARRAY({ type: DataTypes.JSON }),
      allowNull: false,
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    deliveryTime: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
}
