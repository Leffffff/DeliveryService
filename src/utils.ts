import { NextFunction, Request, Response } from 'express';
import { Client, Courier } from './models';
import { RestaurantRepository } from './repositories/restaurantRepository';
import { UserRepository } from './repositories/userRepository';

const repository = {
  clientRepository: new UserRepository(Client),
  courierRepository: new UserRepository(Courier),
};

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
  req.body.restaurantRepository = new RestaurantRepository();
  next();
};
