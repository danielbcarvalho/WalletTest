import React from 'react';

import { render } from '../../../jest/test-utils';

import CardRegistration from './';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));
describe('CardRegistrationScreen', () => {
  let navigateMock: jest.Mock;

  beforeEach(() => {
    navigateMock = jest.fn();
    useNavigation.mockReturnValue({ navigate: navigateMock });
  });
  test('matches snapshot', () => {
    const { toJSON } = render(<CardRegistration />);
    expect(toJSON()).toMatchSnapshot();
  });
});
