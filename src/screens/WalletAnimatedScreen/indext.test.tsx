import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { createQueryClientWrapper, render } from '../../../jest/test-utils';

import WalletAnimatedScreen from './';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));
describe('WalletAnimatedScreen', () => {
  let navigateMock: jest.Mock;

  beforeEach(() => {
    navigateMock = jest.fn();
    useNavigation.mockReturnValue({ navigate: navigateMock });
  });

  test('should render correctly', async () => {
    const { toJSON } = render(<WalletAnimatedScreen />, {
      wrapper: createQueryClientWrapper(),
    });

    expect(toJSON()).toMatchSnapshot();
  });
});
