import { AxiosError } from 'axios';

import { Card } from '../../models/CardModels';

import { api } from '../api';

async function list(): Promise<Card[]> {
  try {
    const { data } = await api.get<Card[]>('/cards');
    return data;
  } catch (error: unknown) {
    throw new Error((error as AxiosError).message);
  }
}

async function register(card: Card): Promise<Card[]> {
  try {
    const { data } = await api.post<Card[]>('/cards', card);
    return data;
  } catch (error: unknown) {
    throw new Error((error as AxiosError).message);
  }
}

export const cardService = {
  list,
  register,
};
