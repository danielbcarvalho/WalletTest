import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const translations = {
  pt: {
    translation: {
      'my cards': 'meus cartões',
      'register card': 'cadastrar cartão',
      'Wallet Test': 'Wallet Test',
      'card number': 'número do cartão',
      'card holder name': 'nome do titular do cartão',
      'expiration date': 'vencimento',
      cvv: 'código de segurança',
      advance: 'avançar',
      register: 'cadastro',
      'successfully registered card': 'cartão cadastrado com sucesso',
      validity: 'Validade',
      'use this card': 'usar este cartão',
      'pay with this card': 'pagar com este cartão',
      'go back': 'voltar',
      'ops, no card registered': 'ops, nenhum cartão cadastrado',
      'My cards': 'Meus cartões',
      'Payment Successful': 'Pagamento realizado com sucesso',
      Congratulations: 'Parabéns',
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
