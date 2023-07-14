import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { render } from '../../../jest/test-utils';
import { defaultTheme } from '../../theme/defaultTheme';

import { Button } from '.';

describe('Button component', () => {
  test('renders with default props', () => {
    const { getByText, getByTestId } = render(
      <Button title="Default Button" />,
    );
    const buttonTextElement = getByText('Default Button');
    expect(buttonTextElement).toBeDefined();

    const buttonElement = getByTestId('multipurpose-button');

    expect(buttonElement.props.style.backgroundColor).toBe(
      defaultTheme.components.button.primary.backgroundColor,
    );
  });

  test('renders with primary type', () => {
    const { getByText, getByTestId } = render(
      <Button title="Primary Button" type="primary" />,
    );
    const buttonTextElement = getByText('Primary Button');
    expect(buttonTextElement).toBeDefined();

    const buttonElement = getByTestId('multipurpose-button');

    expect(buttonElement.props.style.backgroundColor).toBe(
      defaultTheme.components.button.primary.backgroundColor,
    );
  });

  test('renders with secondary type', () => {
    const { getByText, getByTestId } = render(
      <Button title="Secondary Button" type="secondary" />,
    );
    const buttonTextElement = getByText('Secondary Button');
    expect(buttonTextElement).toBeDefined();

    const buttonElement = getByTestId('multipurpose-button');

    expect(buttonElement.props.style.backgroundColor).toBe(
      defaultTheme.components.button.secondary.backgroundColor,
    );
  });

  test('renders disabled', () => {
    const { getByText, getByTestId } = render(
      <Button title="Disabled Button" disabled />,
    );
    const buttonTextElement = getByText('Disabled Button');
    expect(buttonTextElement).toBeDefined();

    const buttonElement = getByTestId('multipurpose-button');

    expect(buttonElement.props.style.backgroundColor).toBe(
      defaultTheme.components.button.disabled.backgroundColor,
    );
  });

  test('fires onPress event when pressed', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(
      <Button title="Clickable Button" onPress={onPressMock} />,
    );
    const buttonElement = getByText('Clickable Button');
    expect(buttonElement).toBeDefined();

    fireEvent.press(buttonElement);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  test('matches snapshot', () => {
    const { toJSON } = render(<Button title="Default Button" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
