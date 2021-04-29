import { Request, Response } from 'express';

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (!req.body) res.json('No body');
  const { name, courierRepository, clientRepository } = req.body;
  const repository = courierRepository ?? clientRepository;

  if (!name) res.json('No name provided');
  const user = await repository.createUser(name);

  res.status(200).json(user);
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { courierRepository, clientRepository } = req.body;
  const repository = courierRepository ?? clientRepository;

  const user = await repository.getUser(id);

  res.status(200).json(user);
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { courierRepository, clientRepository } = req.body;
  const repository = courierRepository ?? clientRepository;

  const params = req.body;
  const user = await repository.updateUser(id, params);

  res.status(200).json(user);
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { courierRepository, clientRepository } = req.body;
  const repository = courierRepository ?? clientRepository;

  const user = await repository.deleteUser(id);

  res.status(200).json(user);
};
