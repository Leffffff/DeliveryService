import { Request, Response } from 'express';
import { Product } from '../types';
import { getRandomDeliveryTime } from '../utils';

export const makeOrder = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  if (!req.body) res.json('No body');
  const { restaurantId, cart, courierRepository, orderRepository } = req.body;

  const amount = cart.reduce(
    (acc: number, next: Product) => (acc += next.cost),
    0
  );
  const deliveryTime = getRandomDeliveryTime(20, 50);

  const courier = await courierRepository.getRandomCourier();

  const order = await orderRepository.createOrder(
    id,
    restaurantId,
    courier.id,
    cart,
    amount,
    deliveryTime
  );

  res.status(200).json(order);
};

export const getOrder = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { orderRepository } = req.body;
  const order = await orderRepository.getOrder({ clientId: id });

  res.status(200).json(order);
};
