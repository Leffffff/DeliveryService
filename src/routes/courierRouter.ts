import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from '../controllers/userController';

export const courierRouter = Router();

courierRouter.post('/', createUser);
courierRouter.get('/:id', getUser);
courierRouter.put('/:id', updateUser);
courierRouter.delete('/:id', deleteUser);
