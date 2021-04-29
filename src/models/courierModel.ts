import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface CourierAttributes {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CourierModel
  extends Model<CourierAttributes>,
    CourierAttributes {}

export class Courier extends Model<CourierModel, CourierAttributes> {}

export type CourierStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): CourierModel;
};

export function CourierFactory(sequelize: Sequelize): CourierStatic {
  return <CourierStatic>sequelize.define('couriers', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
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
  });
}
