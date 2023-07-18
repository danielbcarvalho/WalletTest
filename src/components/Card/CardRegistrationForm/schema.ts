import * as yup from 'yup';
import { isValidCreditCard, isValidExpirationDate } from '../../../utils/card';

export const cardFormValidationSchema = yup.object({
  number: yup
    .string()
    .required('Número do cartão é obrigatório')
    .test('creditCard', 'Número do cartão inválido', value => {
      return value ? isValidCreditCard(value) : true;
    }),
  name: yup
    .string()
    .required('Nome do titular do cartão é obrigatório')
    .test('fullName', 'Nome incompleto', value => {
      return value ? value.trim().split(' ').length > 1 : true;
    }),
  expiry: yup
    .string()
    .required('Data de vencimento é obrigatória')
    .matches(/^\d{2}\/\d{2}$/, 'Data de vencimento inválida')
    .test('expirationDate', 'Data de vencimento inválida', value => {
      return value ? isValidExpirationDate(value) : true;
    }),
  cvv: yup
    .string()
    .required('Código de segurança é obrigatório')
    .matches(/^\d{3}$/, 'Código de segurança inválido'),
});
