import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from '../controllers/userController';
import { defineCourier } from '../utils';

export const courierRouter = Router();

courierRouter.use(defineCourier);
courierRouter.post('/', createUser);
courierRouter.get('/:id', getUser);
courierRouter.put('/:id', updateUser);
courierRouter.delete('/:id', deleteUser);
