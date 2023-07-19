import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { waitFor, screen } from '@testing-library/react-native';

import { render } from '../../jest/test-utils';

import Routes from './index';

jest.mock('react-native-device-info', () => {
  return {
    __esModule: true,
    default: jest.fn(() => {}),
    hasNotch: jest.fn(() => true),
  };
});

describe('Routes', () => {
  test('HomeScreen exists', async () => {
    const component = (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );

    render(component);

    await waitFor(() => {
      const title = screen.getByText('Wallet Test');
      const button1 = screen.getByText('my cards');
      const button2 = screen.getByText('register card');
      expect(title).toBeTruthy();
      expect(button1).toBeTruthy();
      expect(button2).toBeTruthy();
    });
  });
});
