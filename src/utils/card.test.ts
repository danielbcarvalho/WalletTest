import { mockDoubleCardsData } from '../components/hooks/useCardList.test';
import {
  isCardOnTheTop,
  isValidCreditCard,
  isValidExpirationDate,
  topCardIndex,
} from './card';

describe('isValidCreditCard', () => {
  test('returns true for a valid credit card number', () => {
    const validNumber = '5162 0046 7811 0441';
    const result = isValidCreditCard(validNumber);
    expect(result).toBe(true);
  });

  test('returns false for an invalid credit card number', () => {
    const invalidNumber = '1234567890123456';
    const result = isValidCreditCard(invalidNumber);
    expect(result).toBe(false);
  });
});

describe('isValidExpirationDate', () => {
  test('returns true for a valid expiration date', () => {
    const validDate = '12/23';
    const result = isValidExpirationDate(validDate);
    expect(result).toBe(true);
  });

  test('returns false for an invalid expiration date', () => {
    const invalidDate = '13/22';
    const result = isValidExpirationDate(invalidDate);
    expect(result).toBe(false);
  });
});

describe('isCardOnTheTop', () => {
  test('returns true if the card is on the top', () => {
    const index = 1;
    const result = isCardOnTheTop(index, mockDoubleCardsData);
    expect(result).toBe(true);
  });

  test('returns false if the card is not on the top', () => {
    const index = 0;
    const result = isCardOnTheTop(index, mockDoubleCardsData);
    expect(result).toBe(false);
  });
});

describe('topCardIndex', () => {
  test('returns the index of the top card', () => {
    const result = topCardIndex(mockDoubleCardsData);
    expect(result).toBe(1);
  });
});
