type ConfigStringKeys = 'host' | 'user' | 'database' | 'password';

export type PostgresConfig = {
  [k in ConfigStringKeys]: string;
} & {
  port: number;
};

export type Menu = Product[];

export type Product = {
  name: string;
  cost: number;
};
