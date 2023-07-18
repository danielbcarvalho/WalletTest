import React from 'react';
import { act } from 'react-test-renderer';
import * as ReactQuery from '@tanstack/react-query';
import { waitFor } from '@testing-library/react-native';
import { renderHook } from '@testing-library/react-hooks';

import { Card } from '../../../models/CardModels';
import {
  render,
  fireEvent,
  createQueryClientWrapper,
} from '../../../../jest/test-utils';

import CardsSelect from '.';
import { useNavigation } from '@react-navigation/native';
import { useCardList } from '../../hooks/useCardList';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

const mockCards: Card[] = [
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

const mockSelectedCardIndex = mockCards.length - 1;

describe('CardsSelect', () => {
  const mockNavigate = jest.fn();

  beforeAll(() => {
    useNavigation.mockReturnValue({ navigate: mockNavigate });
  });

  test('renders correctly with cards', () => {
    const component = render(<CardsSelect />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with no cards', async () => {
    jest.spyOn(ReactQuery, 'useQuery').mockImplementation(
      jest.fn().mockReturnValue({
        data: [],
      }),
    );

    const component = render(<CardsSelect />);

    const { result } = renderHook(() => useCardList(), {
      wrapper: createQueryClientWrapper(),
    });

    await waitFor(() => {
      expect(result.current.cards).toEqual([]);
    });

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('calls onUseCard with correct selected card when "Use Card" button is pressed', async () => {
    jest.spyOn(ReactQuery, 'useQuery').mockImplementation(
      jest.fn().mockReturnValue({
        data: mockCards,
      }),
    );
    const { getByText } = render(<CardsSelect />);

    const { result } = renderHook(() => useCardList(), {
      wrapper: createQueryClientWrapper(),
    });

    await act(async () => {
      fireEvent.press(getByText('use this card'));
    });

    expect(result.current.cards[mockSelectedCardIndex]).toBe(
      mockCards[mockSelectedCardIndex],
    );
  });
});
