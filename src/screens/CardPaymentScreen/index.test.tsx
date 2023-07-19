import React from 'react';
import { act } from 'react-test-renderer';
import * as ReactQuery from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import CardRegistrationForm from '../../components/Card/CardRegistrationForm';
import { useCardRegistration } from '../../components/hooks/useCardRegistration';
import CardRegistration from './';
import { renderHook } from '@testing-library/react-hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ThemeProvider } from '../../theme';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
  useFocusEffect: jest.fn(),
}));

jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(),
  useQueryClient: jest.fn(),
  useQuery: jest.fn(),
}));

describe('CardRegistrationScreen', () => {
  const mockNavigate = jest.fn();
  const mockInvalidateQueries = jest.fn();
  const mockMutateAsync = jest.fn();
  const mockData = {
    id: '4d18544b-66c4-478b-ab4a-0bab14c6f4d8',
    number: '5503 2328 4377 9802',
    name: 'John Doe',
    expiry: '12/24',
    kind: 'black',
    cvv: '123',
  };

  beforeEach(() => {
    jest.spyOn(ReactQuery, 'useQuery').mockImplementation(
      jest.fn().mockReturnValue({
        data: [],
      }),
    );

    useNavigation.mockReturnValue({ navigate: mockNavigate });
    useQueryClient.mockReturnValue({
      invalidateQueries: mockInvalidateQueries,
    });
    useMutation.mockReturnValue({
      mutateAsync: mockMutateAsync,
      onError: jest.fn(),
    });
    ReactQuery.useQuery.mockReturnValue({
      data: mockData,
      onError: jest.fn(),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  test('call useCardRegistration hook and trigger onCardRegisterForm on form submission', async () => {
    const onCardRegisterFormMock = jest.fn();

    const { result } = renderHook(() => useCardRegistration());

    await act(async () => {
      await result.current(mockData);
    });

    const { getByLabelText, getByText } = render(
      <ThemeProvider>
        <CardRegistrationForm onCardRegisterForm={onCardRegisterFormMock} />
      </ThemeProvider>,
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
      expect(onCardRegisterFormMock).toHaveBeenCalledTimes(1),
    );
  });

  test('matches snapshot', async () => {
    const { result } = renderHook(() => useCardRegistration());

    await act(async () => {
      await result.current(mockData);
    });

    const { toJSON } = render(
      <ThemeProvider>
        <CardRegistration />
      </ThemeProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  // test('matches snapshot', async () => {
  //   jest.spyOn(ReactQuery, 'useQuery').mockImplementation(
  //     jest.fn().mockReturnValue({
  //       data: mockData,
  //     }),
  //   );

  //   const { result } = renderHook(() => useCardRegistration());

  //   await act(async () => {
  //     await result.current(mockData);
  //   });

  //   const { toJSON } = render(
  //     <ThemeProvider>
  //       <CardRegistration />
  //     </ThemeProvider>,
  //   );
  //   expect(toJSON()).toMatchSnapshot();
  // });
});
