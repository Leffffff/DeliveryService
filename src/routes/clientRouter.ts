import { Router } from 'express';
import { createClient, getClient } from '../controllers/clientController';

export const clientRouter = Router();

clientRouter.post('/', createClient);
clientRouter.get('/:id', getClient);
clientRouter.put('/:id');
clientRouter.delete('/:id');
