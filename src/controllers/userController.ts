import { Request, Response } from 'express';

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (!req.body) res.json('No body');
  const { name, repository } = req.body;

  if (!name) res.json('No name provided');
  const client = await repository.createUser(name);

  res.status(200).json(client);
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { repository } = req.body;
  if (!id) res.status(404).json('User not found');
  const client = await repository.getUser(id);

  res.status(200).json(client);
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { repository } = req.body;
  if (!id) res.status(404).json('User not found');

  const params = req.body;
  const client = await repository.updateUser(id, params);

  res.status(200).json(client);
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { repository } = req.body;
  if (!id) res.status(404).json('User not found');

  const client = await repository.deleteUser(id);

  res.status(200).json(client);
};
