import { number, expirationDate } from 'card-validator';

import { Card } from '../models/CardModels';

export function isValidCreditCard(value: string): boolean {
  const numberValidation = number(value);

  return numberValidation.isPotentiallyValid || numberValidation.isValid;
}

export function isValidExpirationDate(value: string): boolean {
  const expirationValidation = expirationDate(value);

  return (
    expirationValidation.isPotentiallyValid || expirationValidation.isValid
  );
}

export function isCardOnTheTop(index: number, cardsData: Card[]) {
  return index === topCardIndex(cardsData);
}

export function topCardIndex(cardsData: any[]) {
  return cardsData.length - 1;
}
