import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { waitFor, screen } from '@testing-library/react-native';

import { render } from '../../jest/test-utils';

import Routes from './index';

describe('Routes', () => {
  test('CardRegistration screen exists', async () => {
    const component = (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );

    render(component);

    await waitFor(() => {
      const title = screen.getByText('register card');
      expect(title).toBeTruthy();
    });
  });

  test('CardList screen exists', async () => {
    const component = (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );

    render(component);

    await waitFor(() => {
      const title = screen.getByText('my cards');
      expect(title).toBeTruthy();
    });
  });
});
