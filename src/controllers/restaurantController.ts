import { Request, Response } from 'express';

export const createRestaurant = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (!req.body) res.json('No body');
  const { name, menu, restaurantRepository } = req.body;

  if (!name) res.json('No name provided');
  const restaurant = await restaurantRepository.createRestaurant(name, menu);

  res.status(200).json(restaurant);
};

export const getRestaurant = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { restaurantRepository } = req.body;

  const restaurant = await restaurantRepository.getRestaurant(id);

  res.status(200).json(restaurant);
};

export const updateRestaurant = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { restaurantRepository } = req.body;

  const params = req.body;
  const restaurant = await restaurantRepository.updateRestaurant(id, params);

  res.status(200).json(restaurant);
};

export const deleteRestaurant = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { restaurantRepository } = req.body;

  const restaurant = await restaurantRepository.deleteRestaurant(id);

  res.status(200).json(restaurant);
};
