import { act } from 'react-test-renderer';
import * as ReactQuery from '@tanstack/react-query';
import { waitFor } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import { renderHook } from '@testing-library/react-hooks';

import { useCardList } from './useCardList';
import { Card } from '../../models/CardModels';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(),
  useQueryClient: jest.fn(),
  useQuery: jest.fn(),
}));

export const mockDoubleCardsData: Card[] = [
  {
    id: '4ec42ba9-50af-40d2-af90-8312edbd9ca2',
    number: '3529 5435 3355 8720',
    cvv: '017',
    name: 'John Doe',
    expiry: '12/23',
    kind: 'black',
  },
  {
    name: 'Daniel B Carvalho',
    number: '5203 9436 6133 9001',
    cvv: '123',
    expiry: '11/24',
    id: '4ec42ba9-50af-40d2-af90-8312edbd9XXX',
    kind: 'green',
  },
];

export const mockCards = [
  {
    id: '4ec42ba9-50af-40d2-af90-8312edbd9ca2',
    number: '3529 5435 3355 8720',
    cvv: '017',
    name: 'John Doe',
    expiry: '12/23',
    kind: 'black',
  },
];

const mockBottomCardIndex = 0;
describe('useCardList hook', () => {
  const mockNavigate = jest.fn();
  const mockInvalidateQueries = jest.fn();
  const mockMutateAsync = jest.fn();

  beforeAll(() => {
    jest.clearAllMocks();

    useNavigation.mockReturnValue({ navigate: mockNavigate });
    ReactQuery.useQueryClient.mockReturnValue({
      invalidateQueries: mockInvalidateQueries,
    });
    ReactQuery.useMutation.mockReturnValue({
      mutateAsync: mockMutateAsync,
      onError: jest.fn(),
    });
    ReactQuery.useQuery.mockReturnValue({
      data: mockCards,
      onError: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('retrieve correct data', async () => {
    ReactQuery.useQuery.mockReturnValue({
      data: mockCards,
      onError: jest.fn(),
    });
    const { result } = renderHook(() => useCardList());
    expect(result.current?.cards?.length).toBeGreaterThan(0);
    expect(result.current.cards).toBe(mockCards);
  });

  test('set card on top correctly', async () => {
    ReactQuery.useQuery.mockReturnValue({
      data: mockCards,
      onError: jest.fn(),
    });
    const { result } = renderHook(() => useCardList());
    await act(async () => {
      result.current?.setCardOnTop(mockDoubleCardsData[mockBottomCardIndex].id);
    });
    expect(result.current.cards[mockBottomCardIndex]).toBe(
      mockCards[mockBottomCardIndex],
    );
  });
});
