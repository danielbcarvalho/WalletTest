import React from 'react';

import { render } from '../../../jest/test-utils';

import Card from '.';

describe('Card', () => {
  const card = {
    id: '4ec42ba9-50af-40d2-af90-8312edbd9ca2',
    number: '3529 5435 3355 8727',
    cvv: '317',
    name: 'John Doe',
    expiry: '12/24',
  };

  test('renders card with black kind', () => {
    const { getByText } = render(<Card card={card} kind="black" />);
    expect(getByText('Black Card')).toBeTruthy();
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('**** **** **** 8727')).toBeTruthy();
    expect(getByText('validity 12/24')).toBeTruthy();
  });

  test('renders card with green kind', () => {
    const { getByText } = render(<Card card={card} kind="green" />);
    expect(getByText('Green Card')).toBeTruthy();
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('**** **** **** 8727')).toBeTruthy();
    expect(getByText('validity 12/24')).toBeTruthy();
  });
  test('matches snapshot', () => {
    const cardMock = {
      id: '4ec42ba9-50af-40d2-af90-8312edbd9ca2',
      number: '3529 5435 3355 8727',
      cvv: '317',
      name: 'John Doe',
      expiry: '12/23',
    };
    const { toJSON } = render(<Card card={cardMock} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
