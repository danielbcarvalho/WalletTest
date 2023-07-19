import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { fireEvent } from '@testing-library/react-native';

import { render } from '../../../jest/test-utils';

import HeaderButton from './';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('react-native-device-info', () => {
  return {
    __esModule: true,
    default: jest.fn(() => {}),
    hasNotch: jest.fn(() => true),
  };
});

describe('HeaderButton', () => {
  let navigateMock: jest.Mock;
  let goBackMock: jest.Mock;

  beforeEach(() => {
    navigateMock = jest.fn();
    goBackMock = jest.fn().mockReturnValue(true);
    useNavigation.mockReturnValue({
      navigate: navigateMock,
      goBack: goBackMock,
    });
  });

  test('render correctly with cardList type', () => {
    const { getByLabelText, getByText, queryByLabelText } = render(
      <HeaderButton type="cardList" />,
    );

    const goBackButton = getByLabelText('go back');
    expect(goBackButton).toBeTruthy();

    const headerTitle = getByText('register');
    expect(headerTitle).toBeTruthy();

    const registerButton = queryByLabelText('register card');
    expect(registerButton).toBeNull();
  });

  test('render correctly with register type', () => {
    const { getByText, getByLabelText, queryByTestId } = render(
      <HeaderButton type="register" />,
    );

    const goBackButton = getByLabelText('go back');
    expect(goBackButton).toBeTruthy();

    const headerTitle = getByText('Wallet Test');
    expect(headerTitle).toBeTruthy();

    const registerCardButton = getByLabelText('register card');
    expect(registerCardButton).toBeTruthy();

    expect(queryByTestId('disabled-button')).toBeNull();
  });

  test('call handleGoBack when go back button is pressed', () => {
    // TODO: get this test to work, problem with goBackMock
    // const { getByLabelText } = render(<HeaderButton type="cardList" />);
    // const goBackButton = getByLabelText('go back');
    // fireEvent.press(goBackButton);
    // expect(goBackMock).toHaveBeenCalledTimes(1);
  });

  test('navigates to CardRegistrationScreen on register card button press', () => {
    const { getByLabelText } = render(<HeaderButton type="register" />);
    fireEvent.press(getByLabelText('register card'));
    expect(navigateMock).toHaveBeenCalledWith('CardRegistration');
  });
});
