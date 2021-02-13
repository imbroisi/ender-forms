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

export const Rg = ({
  name = 'rg',
  label = 'RG',
  placeholder = 'Digite seu RG',
  rules = mergeValidations(required() /* TODO: , rg() */),
  ...rest
}: Props) => (
  <TextFieldContainer name={name} label={label} placeholder={placeholder} rules={rules} {...rest} />
);
