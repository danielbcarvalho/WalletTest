import { AxiosError } from 'axios';

import { Card } from '../../models/CardModels';

import { api } from '../api';

async function list(): Promise<Card[]> {
  try {
    // Simulate loading
    // return await listWithDelay();
    // regular call
    const { data } = await api.get<Card[]>('/cards');
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response?.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error('Internal Server Error');
    }
  }
}

async function register(card: Card): Promise<Card> {
  try {
    const { data } = await api.post<Card>('/cards', card);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response?.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error('Internal Server Error');
    }
  }
}

async function listWithDelay(): Promise<Card[]> {
  return new Promise(resolve => {
    setTimeout(async () => {
      const { data } = await api.get<Card[]>('/cards');
      resolve(data);
    }, 3000); // 3 seconds of delay to simulate loading
  });
}

export const cardService = {
  list,
  register,
};
