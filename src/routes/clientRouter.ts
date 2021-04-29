import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from '../controllers/userController';
import { defineClient } from '../utils';

export const clientRouter = Router();

clientRouter.use(defineClient);
clientRouter.post('/', createUser);
clientRouter.get('/:id', getUser);
clientRouter.put('/:id', updateUser);
clientRouter.delete('/:id', deleteUser);
