import React from 'react';

import { act } from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import { fireEvent, waitFor } from '@testing-library/react-native';

import { render } from '../../../jest/test-utils';
import CardRegistrationForm from '../../components/Card/CardRegistrationForm';
import { useCardRegistration } from '../../components/hooks/useCardRegistration';

import CardRegistration from './';

jest.mock('../../components/hooks/useCardRegistration');
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));
describe('CardRegistrationScreen', () => {
  let navigateMock: jest.Mock;

  beforeEach(() => {
    navigateMock = jest.fn();
    useNavigation.mockReturnValue({ navigate: navigateMock });
  });

  test('call useCardRegistration hook and trigger onCardRegisterForm on form submission', async () => {
    const mockOnCardRegisterForm = jest.fn();
    useCardRegistration.mockReturnValue(mockOnCardRegisterForm);

    const { getByLabelText, getByText } = render(
      <CardRegistrationForm onCardRegisterForm={mockOnCardRegisterForm} />,
    );

    await act(async () => {
      fireEvent.changeText(
        getByLabelText('card number'),
        '5284 7474 3246 1715',
      );
      fireEvent.changeText(getByLabelText('card holder name'), 'John Doe');
      fireEvent.changeText(getByLabelText('expiration date'), '12/23');
      fireEvent.changeText(getByLabelText('cvv'), '123');
    });

    await act(async () => {
      fireEvent.press(getByText('advance'));
    });
    await waitFor(() =>
      expect(mockOnCardRegisterForm).toHaveBeenCalledTimes(1),
    );
  });

  test('matches snapshot', () => {
    const { toJSON } = render(<CardRegistration />);
    expect(toJSON()).toMatchSnapshot();
  });
});
