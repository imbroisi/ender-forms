import React from 'react';
import type { UseControllerOptions } from 'react-hook-form';
import { cpf } from '../../validations/cpf';
import { mergeValidations } from '../../validations/helpers/mergeValidations';
import { required } from '../../validations/required';
import { IMaskOptions } from '../../FormFieldsBase/interfaces';
import { TextFieldContainer } from '../../FormFieldsBase/TextFieldContainer';

interface Props {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  rules?: UseControllerOptions['rules'];
  maskOptions?: IMaskOptions;
  prefix?: string | undefined;
}

export const Cpf = ({
  name = 'cpf',
  label = 'CPF',
  placeholder = '000.000.000-00',
  rules = mergeValidations(required(), cpf()),
  maskOptions = {
    numericOnly: true,
    delimiters: ['.', '.', '-'],
    blocks: [3, 3, 3, 2],
  },
  ...rest
}: Props) => (
  <TextFieldContainer
    name={name}
    label={label}
    placeholder={placeholder}
    rules={rules}
    maskOptions={maskOptions}
    {...rest}
  />
);
