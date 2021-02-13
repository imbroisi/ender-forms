import React from 'react';
import type { UseControllerOptions } from 'react-hook-form';
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

export const Cnpj = ({
  name = 'cnpj',
  label = 'CNPJ',
  placeholder = '000.000.000-00',
  rules = mergeValidations(required() /* TODO , cnpj() */),
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
