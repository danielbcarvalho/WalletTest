import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { render } from '../../../jest/test-utils';
import InputCustom from './';

describe('InputCustom', () => {
  test('renders correctly', () => {
    const { getByText } = render(<InputCustom label="Test Label" />);

    const label = getByText('Test Label');
    expect(label).toBeTruthy();
  });

  test('calls onChangeText when text changes', () => {
    const onChangeText = jest.fn();
    const { getByText } = render(
      <InputCustom label="Test Label" onChangeText={onChangeText} />,
    );

    const label = getByText('Test Label');
    fireEvent.changeText(label, 'Test Input');

    expect(onChangeText).toHaveBeenCalledWith('Test Input');
  });
});
