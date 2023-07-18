import { useNavigation } from '@react-navigation/native';
import { renderHook, act } from '@testing-library/react-hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useCardRegistration } from './useCardRegistration';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(),
  useQueryClient: jest.fn(),
}));

describe('useCardRegistration hook', () => {
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

  beforeAll(() => {
    useNavigation.mockReturnValue({ navigate: mockNavigate });
    useQueryClient.mockReturnValue({
      invalidateQueries: mockInvalidateQueries,
    });
    useMutation.mockReturnValue({
      mutateAsync: mockMutateAsync,
      onError: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('call mutateAsync with the form data', async () => {
    const { result } = renderHook(() => useCardRegistration());
    await act(async () => {
      await result.current(mockData);
    });
    expect(mockMutateAsync).toHaveBeenCalledTimes(1);
    expect(mockMutateAsync).toHaveBeenCalledWith(mockData);
  });

  // TODO: test onSuccess and onError callbacks and navigation results
});
