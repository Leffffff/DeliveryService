import { Request, Response } from 'express';
import { UserRepository } from '../repositories/userRepository';

const clientRepository = new UserRepository('clients');

export const createClient = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (!req.body) res.json('No body');
  const { name } = req.body;

  if (!name) res.json('No name provided');
  const client = await clientRepository.createUser(name);

  res.status(200).json(client);
};

export const getClient = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  if (!id) res.status(404).json('User not found');
  const client = await clientRepository.getUser(id);

  res.status(200).json(client);
};

export const updateClient = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  if (!id) res.status(404).json('User not found');

  const params = req.body;
  const client = await clientRepository.updateUser(id, params);

  res.status(200).json(client);
};

export const deleteClient = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  if (!id) res.status(404).json('User not found');

  const client = await clientRepository.deleteUser(id);

  res.status(200).json(client);
};
