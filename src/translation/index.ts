import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const translations = {
  pt: {
    translation: {
      'my cards': 'meus cartões',
      'register card': 'cadastrar cartão',
      'Wallet Test': 'Wallet Test',
    },
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: translations,
  lng: 'pt',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;
