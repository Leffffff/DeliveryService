export type Client = {
  id: number;
  name: string;
};

export type Courier = {
  id: number;
  name: string;
};

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
  timeDelivery: number;
  deliveryAmount: number;
};
