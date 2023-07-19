import React from 'react';
import * as ReactQuery from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import { render, renderHook, waitFor } from '@testing-library/react-native';

import { Alert } from 'react-native';
import WalletAnimatedScreen from './';
import { mockCards } from '../../components/hooks/useCardList.test';

import { ThemeProvider } from '../../theme';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));
jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(),
  useQueryClient: jest.fn(),
  useQuery: jest.fn(),
}));
describe('WalletAnimatedScreen', () => {
  let navigateMock: jest.Mock;
  const mockReplace = jest.fn();
  const mockInvalidateQueries = jest.fn();
  beforeAll(() => {
    jest.clearAllMocks();

    ReactQuery.useQueryClient.mockReturnValue({
      invalidateQueries: mockInvalidateQueries,
    });

    ReactQuery.useQuery.mockReturnValue({
      data: mockCards,
      onError: jest.fn(),
    });
  });

  beforeEach(() => {
    navigateMock = jest.fn();
    useNavigation.mockReturnValue({
      navigate: navigateMock,
      replace: mockReplace,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('shows alert with error message and navigates to "Home" on error', async () => {
    const alertMock = jest.spyOn(Alert, 'alert');
    const error = new Error('Test error');

    ReactQuery.useQuery.mockReturnValueOnce({
      isLoading: false,
      isError: true,
      error: error,
    });

    render(
      <ThemeProvider>
        <WalletAnimatedScreen />
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledTimes(1);
      expect(alertMock).toHaveBeenCalledWith(
        'Ops, something went wrong',
        error.message,
        expect.arrayContaining([
          expect.objectContaining({
            text: 'Voltar',
            onPress: expect.any(Function),
          }),
        ]),
      );
    });

    const voltarButton = Alert.alert.mock.calls[0][2][0];
    voltarButton.onPress();

    expect(mockReplace).toHaveBeenCalledTimes(1);
    expect(mockReplace).toHaveBeenCalledWith('Home');
  });

  test('navigates to "CardList" on finish loading', async () => {
    ReactQuery.useQuery.mockReturnValueOnce({
      data: mockCards,
      onError: jest.fn(),
    });

    render(
      <ThemeProvider>
        <WalletAnimatedScreen />
      </ThemeProvider>,
    );
    await waitFor(() => {
      expect(mockReplace).toHaveBeenCalledTimes(1);
      expect(mockReplace).toHaveBeenCalledWith('CardList');
    });
  });

  test('should render correctly loading', async () => {
    ReactQuery.useQuery.mockReturnValueOnce({
      isLoading: true,
      isError: false,
      cards: [],
    });

    const { toJSON } = render(
      <ThemeProvider>
        <WalletAnimatedScreen />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
