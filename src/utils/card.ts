// Função auxiliar para validar número de cartão de crédito usando Algoritmo de Luhn
export function isValidCreditCard(value: string): boolean {
  const sanitizedValue = value.replace(/[- ]/g, '');
  let sum = 0;
  let shouldDouble = false;

  for (let i = sanitizedValue.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitizedValue.charAt(i), 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}
