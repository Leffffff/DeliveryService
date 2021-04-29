import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface OrderAttributes {
  id?: number;
  products: Record<string, unknown>[];
  amount: number;
  createdAt: Date;
  deliveredAt: Date;
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
    products: {
      type: DataTypes.ARRAY(DataTypes.JSON),
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
    deliveredAt: {
      type: DataTypes.DATE,
      allowNull: true,
      //   defaultValue: DataTypes.NOW,
    },
  });
}
