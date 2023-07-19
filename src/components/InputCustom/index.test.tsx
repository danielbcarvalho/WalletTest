import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import InputCustom from './';
import { ThemeProvider } from '../../theme';

describe('InputCustom', () => {
  test('renders correctly', () => {
    const label = 'card number';
    const value = '1';
    const onChangeText = jest.fn();

    const { getByLabelText, getByText, toJSON } = render(
      <ThemeProvider>
        <InputCustom
          label={label}
          value={value}
          onChangeText={onChangeText}
          name="number"
        />
      </ThemeProvider>,
    );

    const inputElement = getByLabelText(label);
    expect(inputElement).toHaveProp('value', value);

    expect(toJSON()).toMatchSnapshot();
  });

  test('validates field on selection change', () => {
    const label = 'Card Number';
    const value = '1234567890';
    const validateFieldMock = jest.fn();

    const { getByLabelText } = render(
      <ThemeProvider>
        <InputCustom
          label={label}
          value={value}
          onSelectionChange={validateFieldMock}
        />
      </ThemeProvider>,
    );

    const inputElement = getByLabelText(label);
    fireEvent(inputElement, 'selectionChange');

    expect(validateFieldMock).toHaveBeenCalledTimes(1);
  });
});
