import { Router } from 'express';
import { getOrder, makeOrder } from '../controllers/clientController';
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from '../controllers/userController';
import { defineClient, defineCourier, defineOrder } from '../utils';

export const clientRouter = Router();

clientRouter.use(defineClient);
clientRouter.post('/', createUser);
clientRouter.get('/:id', getUser);
clientRouter.put('/:id', updateUser);
clientRouter.delete('/:id', deleteUser);

clientRouter.post('/:id/orders', defineOrder, defineCourier, makeOrder);
clientRouter.get('/:id/orders', defineOrder, getOrder);
