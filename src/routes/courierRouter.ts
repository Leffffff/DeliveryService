import { Router } from 'express';
import {
  avarageDeliveryTime,
  getOrderQty,
  totalAmount,
  frequentAddress,
} from '../controllers/courierController';
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from '../controllers/userController';
import { defineCourier, defineOrder } from '../utils';

export const courierRouter = Router();

courierRouter.use(defineCourier);
courierRouter.post('/', createUser);
courierRouter.get('/:id', getUser);
courierRouter.put('/:id', updateUser);
courierRouter.delete('/:id', deleteUser);

courierRouter.get('/:id/orders/place', defineOrder, frequentAddress);
courierRouter.get('/:id/orders/qty', defineOrder, getOrderQty);
courierRouter.get('/:id/orders/time', defineOrder, avarageDeliveryTime);
courierRouter.get('/:id/orders/amount', defineOrder, totalAmount);
