import { MenuItem, Select } from '@loft/copan-components';
import React, { ReactNode, useContext } from 'react';
import type { UseControllerOptions } from 'react-hook-form';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import { FormsContext } from '../../components/Form/context';
import { FieldsPrefixContext } from '../../FieldsContainer/context';
import { GridContainer } from '../GridContainer';
import { SmProp } from '../interfaces';

export interface ISelectContainerProps extends SmProp {
  id?: string;
  name: string;
  label?: string;
  rules?: UseControllerOptions['rules'];
  placeholder?: string;
  children?: ReactNode;
}

export const SelectContainer = ({
  sm,
  id: inputId,
  name: inputName,
  children,
  rules,
  ...rest
}: ISelectContainerProps) => {
  const { control, errors } = useFormContext();
  const { getFieldValue } = useContext(FormsContext);
  const { getFieldsPrefix } = useContext(FieldsPrefixContext);

  const prefix = getFieldsPrefix();

  let name: string = inputName;
  let id = inputId || inputName || '';

  if (prefix) {
    id = `${prefix}${id}`;
    name = `${prefix}.${name}`;
  }

  const defaultValue = getFieldValue(name) || '';

  const { register } = useForm({
    defaultValues: {
      [name]: defaultValue,
    },
  });

  return (
    <GridContainer item xs={12} sm={sm} noPadding="all">
      <Controller
        name={name}
        rules={rules}
        control={control}
        defaultValue={defaultValue || ''}
        render={({ ref, name, ...props }) => (
          <Select
            {...rest}
            {...props}
            id={id}
            name={name}
            error={!!errors?.[id]}
            fullWidth
            inputRef={register}
          >
            {children}
          </Select>
        )}
      />
    </GridContainer>
  );
};

export { MenuItem };
