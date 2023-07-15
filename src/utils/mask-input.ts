type MaskProps = (text?: string) => (string | RegExp)[];

export const getMaskDateMMYY: MaskProps = (text = '') => {
  const cleanText = text.replace(/\D+/g, '');

  let secondDigitMonthMask = /\d/;

  if (cleanText.startsWith('0')) {
    secondDigitMonthMask = /[1-9]/;
  }
  if (cleanText.startsWith('1')) {
    secondDigitMonthMask = /[0-2]/;
  }

  return [/[0-1]/, secondDigitMonthMask, '/', /\d/, /\d/];
};

export const getMaskCVV: MaskProps = () => {
  return [/\d/, /\d/, /\d/];
};
