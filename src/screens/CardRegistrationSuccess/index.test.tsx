import React from 'react';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { fireEvent, render } from '../../../jest/test-utils';
import CardRegistrationSuccess from './';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: jest.fn(),
  }),
}));

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
  useRoute: jest.fn(),
}));

describe('CardRegistrationSuccess', () => {
  let navigateMock: jest.Mock;

  beforeEach(() => {
    navigateMock = jest.fn();
    useNavigation.mockReturnValue({
      navigate: navigateMock,
    });
    useRoute.mockReturnValue({
      params: {
        card: {
          id: '4ec42ba9-50af-40d2-af90-8312edbd9ca2',
          number: '3529 5435 3355 8720',
          cvv: '017',
          name: 'John Doe',
          expiry: '12/23',
          kind: 'black',
        },
      },
    });
  });

  const component = (
    <NavigationContainer>
      <CardRegistrationSuccess />
    </NavigationContainer>
  );

  test('navigate to CardList on button press', () => {
    const { getByTestId } = render(component);
    fireEvent.press(getByTestId('multipurpose-button'));
    expect(navigateMock).toHaveBeenCalledWith('CardList');
  });

  test('render correctly', () => {
    const { toJSON } = render(component);
    expect(toJSON()).toMatchSnapshot();
  });
});
