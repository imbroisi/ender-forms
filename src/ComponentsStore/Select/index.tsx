import { MenuItem } from '@material-ui/core';
import React from 'react';
import type { UseControllerOptions } from 'react-hook-form';
import { SmProp } from '../../FormFieldsBase/interfaces';
import { ISelectContainerProps, SelectContainer } from '../../FormFieldsBase';

export interface IPersonalSelectProps extends SmProp {
  name?: string;
  placeholder?: string;
  label?: string;
  rules?: UseControllerOptions['rules'];
}
interface ISelectInternalProps extends ISelectContainerProps {
  options: string[][];
}

export const Select = ({ options, ...rest }: ISelectInternalProps) => (
  <SelectContainer {...rest}>
    {options &&
      options.map((option: string[]) => {
        const [value, text] = option;
        return (
          <MenuItem key={value} value={value}>
            {text !== undefined ? text : value}
          </MenuItem>
        );
      })}
  </SelectContainer>
);
