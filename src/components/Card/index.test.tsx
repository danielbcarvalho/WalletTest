import React from 'react';

import { render } from '../../../jest/test-utils';
import { Card as CardModel } from '../../models/CardModels';

import Card from '.';

describe('Card', () => {
  const blackCardMock: CardModel = {
    id: '4ec42ba9-50af-40d2-af90-8312edbd9ca2',
    number: '3529 5435 3355 8720',
    cvv: '017',
    name: 'John Doe',
    expiry: '12/23',
    kind: 'black',
  };

  const greenCardMock: CardModel = {
    name: 'Daniel B Carvalho',
    number: '5203 9436 6133 9001',
    cvv: '123',
    expiry: '11/24',
    id: '4ec42ba9-50af-40d2-af90-8312edbd9XXX',
    kind: 'green',
  };

  test('renders card with black kind', () => {
    const { getByText } = render(<Card card={blackCardMock} />);
    expect(getByText('Black Card')).toBeTruthy();
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('**** **** **** 8720')).toBeTruthy();
    expect(getByText('validity 12/23')).toBeTruthy();
  });

  test('renders card with green kind', () => {
    const { getByText } = render(<Card card={greenCardMock} />);
    expect(getByText('Green Card')).toBeTruthy();
    expect(getByText('Daniel B Carvalho')).toBeTruthy();
    expect(getByText('**** **** **** 9001')).toBeTruthy();
    expect(getByText('validity 11/24')).toBeTruthy();
  });
  test('matches snapshot', () => {
    const { toJSON } = render(<Card card={blackCardMock} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
