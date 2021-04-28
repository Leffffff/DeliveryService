import { Request, Response } from 'express';
import { ClientRepository } from '../repositories/clientRepository';

const clientRepository = new ClientRepository();

export const createClient = async (req: Request, res: Response) => {
  if (!req.body) res.json('No body');
  const { name } = req.body;
  if (!name) res.json('No name provided');
  const client = await clientRepository.createClient(name);
  res.status(200).json(client);
};

export const getClient = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) res.status(404).json('User not found');
  const client = await clientRepository.getClient(id);
  res.status(200).json(client);
};
