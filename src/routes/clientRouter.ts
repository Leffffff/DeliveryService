import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from '../controllers/userController';

export const clientRouter = Router();

clientRouter.post('/', createUser);
clientRouter.get('/:id', getUser);
clientRouter.put('/:id', updateUser);
clientRouter.delete('/:id', deleteUser);
