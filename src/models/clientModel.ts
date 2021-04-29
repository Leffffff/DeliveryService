import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface ClientAttributes {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ClientModel
  extends Model<ClientAttributes>,
    ClientAttributes {}

export class Client extends Model<ClientModel, ClientAttributes> {}

export type ClientStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): ClientModel;
};

export function ClientFactory(sequelize: Sequelize): ClientStatic {
  return <ClientStatic>sequelize.define('clients', {
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
