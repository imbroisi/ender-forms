import React from 'react';
import type { UseControllerOptions } from 'react-hook-form';
import { mergeValidations } from '../../validations/helpers/mergeValidations';
import { maxLength } from '../../validations/maxLength';
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

export const FullName = ({
  name = 'fullName',
  label = 'Nome completo',
  placeholder = 'Digite seu nome completo',
  rules = mergeValidations(required(), maxLength(10)),
  maskOptions = undefined,
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
