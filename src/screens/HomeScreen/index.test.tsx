import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';

import { render } from '../../../jest/test-utils';

import Home from './';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Home', () => {
  let navigateMock: jest.Mock;

  beforeEach(() => {
    navigateMock = jest.fn();
    useNavigation.mockReturnValue({ navigate: navigateMock });
  });

  test('navigates to CardListScreen on my cards button press', () => {
    const { getByText } = render(<Home />);
    const myCardsButton = getByText('my cards');
    fireEvent.press(myCardsButton);

    expect(navigateMock).toHaveBeenCalledWith('WalletAnimatedScreen');
  });

  test('navigates to CardRegistrationScreen on register card button press', () => {
    const { getByText } = render(<Home />);
    const registerCardButton = getByText('register card');
    fireEvent.press(registerCardButton);

    expect(navigateMock).toHaveBeenCalledWith('CardRegistration');
  });

  test('matches snapshot', () => {
    const { toJSON } = render(<Home />);
    expect(toJSON()).toMatchSnapshot();
  });
});
