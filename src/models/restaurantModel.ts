import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
import { Menu } from '../types';

export interface RestaurantAttributes {
  id?: number;
  name: string;
  menu: Menu;
}

export interface RestaurantModel
  extends Model<RestaurantAttributes>,
    RestaurantAttributes {}

export class Restaurant extends Model<RestaurantModel, RestaurantAttributes> {}

export type RestaurantStatic = typeof Model & {
  new (
    values?: Record<string, unknown>,
    options?: BuildOptions
  ): RestaurantModel;
};

export function RestaurantFactory(sequelize: Sequelize): RestaurantStatic {
  return <RestaurantStatic>sequelize.define('restaurants', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    menu: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });
}
