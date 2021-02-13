import { isValid as isValidCpf } from '@fnando/cpf';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';

export const cpf = (): RegisterOptions => ({
  validate: { cpf: (value) => isValidCpf(value) || 'CPF inválido.' },
});
