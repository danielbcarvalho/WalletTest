import { useNavigation } from '@react-navigation/native';
import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react-native';

import { createQueryClientWrapper } from '../../../jest/test-utils';

import { useCardList } from './useCardList';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

// TODO: mock server, for now we are using the real service
describe('useCardList hook - (NEED JSON SERVER UP)', () => {
  const mockNavigate = jest.fn();

  beforeAll(() => {
    useNavigation.mockReturnValue({ navigate: mockNavigate });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize hook with correct initial values', async () => {
    const { result } = renderHook(() => useCardList(), {
      wrapper: createQueryClientWrapper(),
    });

    expect(result.current.cards).toBeUndefined();
    expect(result.current.isError).toBe(false);
    expect(result.current.isLoading).toBe(true);
  });

  test('retrieve correct data', async () => {
    const { result } = renderHook(() => useCardList(), {
      wrapper: createQueryClientWrapper(),
    });

    const mockCards = [
      {
        id: '4ec42ba9-50af-40d2-af90-8312edbd9ca2',
        number: '3529 5435 3355 8727',
        cvv: '317',
        name: 'John Doe',
        expiry: '12/23',
      },
    ];

    await waitFor(() => {
      expect(result.current.cards).toBeDefined();
    });

    expect(result.current.cards).toContainEqual(mockCards[0]);
  });

  test('navigate to CardList screen when cards are retrieved', async () => {
    const { result } = renderHook(() => useCardList(), {
      wrapper: createQueryClientWrapper(),
    });

    await waitFor(() => {
      expect(result.current.cards).toBeDefined();
    });

    expect(mockNavigate).toHaveBeenCalledWith('CardList');
  });
});
