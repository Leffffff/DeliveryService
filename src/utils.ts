import { NextFunction, Request, Response } from 'express';
import { Client, Courier } from './models';
import { OrderRepository } from './repositories/orderRepository';
import { RestaurantRepository } from './repositories/restaurantRepository';
import { UserRepository } from './repositories/userRepository';

const initRepositories = () => {
  const clientRepository = new UserRepository(Client);
  const courierRepository = new UserRepository(Courier);
  const restaurantRepository = new RestaurantRepository();
  const orderRepository = new OrderRepository();
  return {
    clientRepository,
    courierRepository,
    restaurantRepository,
    orderRepository,
  };
};

const repository = initRepositories();

export const defineClient = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  req.body.clientRepository = repository['clientRepository'];
  next();
};

export const defineCourier = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  req.body.courierRepository = repository['courierRepository'];
  next();
};

export const defineRestaurant = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  req.body.restaurantRepository = repository['restaurantRepository'];
  next();
};

export const defineOrder = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  req.body.orderRepository = repository['orderRepository'];
  next();
};

export const getRandomDeliveryTime = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min) + min);

export const findMostFrequent = (addresses: string[]): string | null => {
  let freqAddress = null;

  let frequency = 0;
  addresses.reduce((acc: Record<string, number>, address) => {
    address in acc ? acc[address]++ : (acc[address] = 1);

    if (acc[address] > frequency) {
      frequency = acc[address];
      freqAddress = address;
    }
    return acc;
  }, {});
  return freqAddress;
};
