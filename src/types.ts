export interface User {
  id: number;
  name: string;
  orders: Order[];
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
