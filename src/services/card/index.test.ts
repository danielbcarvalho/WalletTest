import MockAdapter from 'axios-mock-adapter';

import { api } from '../api';

import { cardService } from './';

const mockApi = new MockAdapter(api);

describe('cardService', () => {
  afterEach(() => {
    mockApi.reset();
  });

  describe('list', () => {
    test('return card list', async () => {
      // Testar somente com servidor real
      // const mockCardList = [
      //   {
      //     id: '1',
      //     number: '1234567890',
      //     cvv: '123',
      //     name: 'John Doe',
      //     expiry: '01/23',
      //   },
      //   {
      //     id: '2',
      //     number: '0987654321',
      //     cvv: '321',
      //     name: 'Jane Smith',
      //     expiry: '12/24',
      //   },
      // ];
      // mockApi.onGet('/cards').reply(200, mockCardList);
      // const result = await cardService.list();
      // expect(result).toEqual(mockCardList);
    });

    test('throw error if API request fails', async () => {
      mockApi.onGet('/cards').reply(500, 'Internal Server Error');

      await expect(cardService.list()).rejects.toThrow('Internal Server Error');
    });
  });

  describe('register', () => {
    test('return the registered card', async () => {
      const newCard = {
        id: '3',
        number: '1111111111',
        cvv: '222',
        name: 'Bob Smith',
        expiry: '09/25',
      };

      mockApi.onPost('/cards', newCard).reply(200, newCard);

      const result = await cardService.register(newCard);

      expect(result).toEqual(newCard);
    });

    test('throw error if API request fails', async () => {
      const newCard = {
        id: '3',
        number: '1111111111',
        cvv: '222',
        name: 'Bob Smith',
        expiry: '09/25',
      };

      mockApi.onPost('/cards', newCard).reply(500, 'Internal Server Error');

      await expect(cardService.register(newCard)).rejects.toThrow(
        'Internal Server Error',
      );
    });
  });
});
