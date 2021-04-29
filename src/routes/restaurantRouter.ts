import { Router } from 'express';
import {
  createRestaurant,
  deleteRestaurant,
  getRestaurant,
  updateRestaurant,
} from '../controllers/restaurantController';
import { defineRestaurant } from '../utils';

export const restaurantRouter = Router();

restaurantRouter.use(defineRestaurant);
restaurantRouter.post('/', createRestaurant);
restaurantRouter.get('/:id', getRestaurant);
restaurantRouter.put('/:id', updateRestaurant);
restaurantRouter.delete('/:id', deleteRestaurant);
