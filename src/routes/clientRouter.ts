import { Router } from 'express';
import {
  createClient,
  deleteClient,
  getClient,
  updateClient,
} from '../controllers/clientController';

export const clientRouter = Router();

clientRouter.post('/', createClient);
clientRouter.get('/:id', getClient);
clientRouter.put('/:id', updateClient);
clientRouter.delete('/:id', deleteClient);
