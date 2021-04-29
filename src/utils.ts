import { NextFunction, Request, Response } from 'express';
import { Client, Courier } from './models';
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
  req.body.repository = repository['clientRepository'];
  next();
};

export const defineCourier = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  req.body.repository = repository['courierRepository'];
  next();
};
