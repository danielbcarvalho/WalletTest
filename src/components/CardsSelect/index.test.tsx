import React from 'react';
import { act } from 'react-test-renderer';

import CardsCarousel from '.';
import { fireEvent, render } from '../../../jest/test-utils';
import { Card } from '../../models/CardModels';

describe('CardsCarousel', () => {
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

  const mockOnUseCard = jest.fn();

  test('renders correctly with cards', () => {
    const component = render(
      <CardsCarousel cards={mockCards} onUseCard={mockOnUseCard} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with no cards', () => {
    const component = render(
      <CardsCarousel cards={[]} onUseCard={mockOnUseCard} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('calls onUseCard with correct selected card when "Use Card" button is pressed', async () => {
    const { getByText } = render(
      <CardsCarousel cards={mockCards} onUseCard={mockOnUseCard} />,
    );

    await act(async () => {
      fireEvent.press(getByText('use this card'));
    });

    expect(mockOnUseCard).toHaveBeenCalledWith(
      mockCards[mockSelectedCardIndex],
    );
  });

  test('calls setCardOnTheTop when a card is pressed', async () => {
    const { getByText, toJSON } = render(
      <CardsCarousel cards={mockCards} onUseCard={mockOnUseCard} />,
    );

    await act(async () => {
      fireEvent.press(getByText(mockCards[0].name));
    });

    expect(toJSON()).toMatchSnapshot();
  });
});
