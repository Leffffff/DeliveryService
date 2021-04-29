export interface User {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  orders?: Order[];
}

type ConfigStringKeys = 'host' | 'user' | 'database' | 'password';

export type PostgresConfig = {
  [k in ConfigStringKeys]: string;
} & {
  port: number;
};

export type Order = {
  restaurantId: number;
  clientId: number;
  courierId: number;
  createdAt: Date;
  deliveredAt: Date;
  amount: number;
};

export type Menu = Product[];

type Product = {
  name: string;
  cost: number;
};
