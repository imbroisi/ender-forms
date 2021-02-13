import React from 'react';
import type { UseControllerOptions } from 'react-hook-form';
import { ITextFieldContainerProps, TextFieldContainer } from '../../FormFieldsBase';
import { SmProp } from '../../FormFieldsBase/interfaces';

export interface IPersonalFieldProps extends SmProp {
  name?: string;
  placeholder?: string;
  label?: string;
  rules?: UseControllerOptions['rules'];
  type?: string;
}

export const TextField = (props: ITextFieldContainerProps) => <TextFieldContainer {...props} />;
