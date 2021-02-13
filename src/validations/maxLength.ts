import { RegisterOptions } from 'react-hook-form/dist/types/validator';

export const maxLength = (length: number): RegisterOptions => ({
  maxLength: { value: length, message: `Tamanho máximo de ${length} caracteres.` },
});
