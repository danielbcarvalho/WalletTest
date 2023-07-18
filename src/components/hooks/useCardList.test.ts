import { act } from 'react-test-renderer';
import * as ReactQuery from '@tanstack/react-query';
import { waitFor } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import { renderHook } from '@testing-library/react-hooks';

import { useCardList } from './useCardList';
import { Card } from '../../models/CardModels';
import { createQueryClientWrapper } from '../../../jest/test-utils';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

const mockDoubleCardsData: Card[] = [
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

const mockBottomCardIndex = 0;
describe('useCardList hook - (NEED JSON SERVER UP)', () => {
  const mockNavigate = jest.fn();

  const mockCards = [
    {
      id: '4ec42ba9-50af-40d2-af90-8312edbd9ca2',
      number: '3529 5435 3355 8720',
      cvv: '017',
      name: 'John Doe',
      expiry: '12/23',
      kind: 'black',
    },
  ];

  beforeAll(() => {
    useNavigation.mockReturnValue({ navigate: mockNavigate });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Navigate to WalletAnimatedScreen', async () => {
    const { result } = renderHook(() => useCardList(), {
      wrapper: createQueryClientWrapper(),
    });

    expect(result.current.cards).toHaveLength(0);
    expect(result.current.isError).toBe(false);
    expect(result.current.isLoading).toBe(true);
    expect(mockNavigate).toHaveBeenCalledWith('WalletAnimatedScreen');
  });

  test('retrieve correct data', async () => {
    jest.spyOn(ReactQuery, 'useQuery').mockImplementation(
      jest.fn().mockReturnValue({
        data: mockCards,
      }),
    );

    const { result } = renderHook(() => useCardList(), {
      wrapper: createQueryClientWrapper(),
    });

    await waitFor(() => {
      expect(result.current.cards.length).toBeGreaterThan(0);
    });

    expect(result.current.cards).toBe(mockCards);
  });

  test('navigate to Home when some error happened', async () => {
    jest.spyOn(ReactQuery, 'useQuery').mockImplementation(
      jest.fn().mockReturnValue({
        isError: true,
      }),
    );
    const { result } = renderHook(() => useCardList(), {
      wrapper: createQueryClientWrapper(),
    });
    await waitFor(() => {
      expect(result.current.isError).toBeTruthy();
    });

    expect(mockNavigate).toHaveBeenCalledWith('Home');
  });

  test('set card on top correctly', async () => {
    jest.spyOn(ReactQuery, 'useQuery').mockImplementation(
      jest.fn().mockReturnValue({
        data: mockCards,
      }),
    );

    const { result } = renderHook(() => useCardList(), {
      wrapper: createQueryClientWrapper(),
    });

    await act(async () => {
      result.current.setCardOnTop(mockDoubleCardsData[mockBottomCardIndex].id);
    });

    await waitFor(async () => {
      expect(result.current.cards[mockBottomCardIndex]).toBe(
        mockCards[mockBottomCardIndex],
      );
    });
  });
});
