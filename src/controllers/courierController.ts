import { Request, Response } from 'express';
import { OrderAttributes } from '../models/orderModel';
import { findMostFrequent } from '../utils';

export const frequentAddress = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { orderRepository } = req.body;
  const orders: OrderAttributes[] = await orderRepository.getOrders({
    courierId: id,
  });
  const frequentAddress = findMostFrequent(
    orders.map((order) => order.address)
  );
  res
    .status(200)
    .send(
      frequentAddress !== null
        ? `You delivered the most to ${frequentAddress} street`
        : `You have not delivered yet`
    );
};

export const getOrderQty = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { orderRepository } = req.body;
  const orders = await orderRepository.getOrders({ courierId: id });

  res.status(200).send(`You delivered ${orders.length} times`);
};

export const avarageDeliveryTime = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { orderRepository } = req.body;
  const orders = await orderRepository.getOrders({ courierId: id });

  const orderQty = orders.length;
  const avaradeDeliveryTime =
    orders.reduce(
      (acc: number, next: OrderAttributes) => (acc += next.deliveryTime),
      0
    ) / orderQty;

  res
    .status(200)
    .send(
      !isNaN(avaradeDeliveryTime)
        ? `Avarage delivery time ${Math.floor(avaradeDeliveryTime)} minutes`
        : `You have not delivered`
    );
};

export const totalAmount = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { orderRepository } = req.body;
  const orders = await orderRepository.getOrders({ courierId: id });

  const totalAmount = orders.reduce(
    (acc: number, next: OrderAttributes) => (acc += next.amount),
    0
  );

  res.status(200).send(`Total earned money ${totalAmount}$`);
};
