import React from 'react';
import { fireEvent, act } from '@testing-library/react-native';
import CardRegistrationForm from '../CardRegistrationForm';
import { render } from '../../../jest/test-utils';

describe('CardRegistrationForm', () => {
  const mockOnCardRegisterForm = jest.fn();

  test('should call onCardRegisterForm with correct card data when form is submitted', async () => {
    const { getByLabelText, getByText } = render(
      <CardRegistrationForm onCardRegisterForm={mockOnCardRegisterForm} />,
    );

    await act(async () => {
      fireEvent.changeText(
        getByLabelText('card number'),
        '5365228226730773', // valid card number
      );
      fireEvent.changeText(getByLabelText('card holder name'), 'John Doe');
      fireEvent.changeText(getByLabelText('expiration date'), '1223');
      fireEvent.changeText(getByLabelText('cvv'), '123');
    });

    await act(async () => {
      fireEvent.press(getByText('advance'));
    });

    expect(mockOnCardRegisterForm).toHaveBeenCalledWith({
      card: '5365 2282 2673 0773', // valid card number
      name: 'John Doe',
      date: '12/23',
      cvv: '123',
    });
  });

  test('should NOT be able to submit when an invalid card number is entered', async () => {
    const { getByLabelText, getByText } = render(
      <CardRegistrationForm onCardRegisterForm={mockOnCardRegisterForm} />,
    );

    await act(async () => {
      fireEvent.changeText(
        getByLabelText('card number'),
        '1234567890123456', // invalid card number
      );
      fireEvent.changeText(getByLabelText('card holder name'), 'John Doe');
      fireEvent.changeText(getByLabelText('advance'), '12/23');
      fireEvent.changeText(getByLabelText('cvv'), '123');
    });

    expect(getByText('advance')).toBeDisabled();
  });

  test('should NOT be able to submit when an invalid name is entered', async () => {
    const { getByLabelText, getByText } = render(
      <CardRegistrationForm onCardRegisterForm={mockOnCardRegisterForm} />,
    );

    await act(async () => {
      fireEvent.changeText(
        getByLabelText('card number'),
        '5365228226730773', // valid card number
      );
      fireEvent.changeText(
        getByLabelText('card holder name'),
        'John', // invalid name
      );
      fireEvent.changeText(getByLabelText('advance'), '12/23');
      fireEvent.changeText(getByLabelText('cvv'), '123');
    });

    // Expect the button to be disabled
    expect(getByText('advance')).toBeDisabled();
  });

  test('should NOT be able to submit when an invalid ccv is entered', async () => {
    const { getByLabelText, getByText } = render(
      <CardRegistrationForm onCardRegisterForm={mockOnCardRegisterForm} />,
    );

    await act(async () => {
      fireEvent.changeText(
        getByLabelText('card number'),
        '5365228226730773', // invalid card number
      );
      fireEvent.changeText(getByLabelText('card holder name'), 'John Doe');
      fireEvent.changeText(getByLabelText('advance'), '1223');
      fireEvent.changeText(getByLabelText('cvv'), 'YY');
    });

    // Expect the button to be disabled
    expect(getByText('advance')).toBeDisabled();
  });

  test('should NOT be able to submit when an invalid duodate is entered', async () => {
    const { getByLabelText, getByText } = render(
      <CardRegistrationForm onCardRegisterForm={mockOnCardRegisterForm} />,
    );

    await act(async () => {
      fireEvent.changeText(
        getByLabelText('card number'),
        '5365228226730773', // invalid card number
      );
      fireEvent.changeText(getByLabelText('card holder name'), 'John Doe');
      fireEvent.changeText(getByLabelText('advance'), '01');
      fireEvent.changeText(getByLabelText('cvv'), '123');
    });

    // Expect the button to be disabled
    expect(getByText('advance')).toBeDisabled();
  });
});
