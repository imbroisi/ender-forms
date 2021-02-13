import { RegisterOptions } from 'react-hook-form/dist/types/validator';

export const required = (): RegisterOptions => ({
  required: 'Campo obrigatório.',
});
