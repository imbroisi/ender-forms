import { Checkbox } from '@loft/copan-components';
import React, { useContext } from 'react';
import type { UseControllerOptions } from 'react-hook-form';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import { FormsContext } from '../../components/Form/context';
import { FieldsPrefixContext } from '../../FieldsContainer/context';
import { GridContainer } from '../GridContainer';
import { SmProp } from '../interfaces';
import useStyles from './CheckboxContainer.styles';

export interface ICheckboxContainerProps extends SmProp {
  id?: string;
  name: string;
  label: string;
  rules?: UseControllerOptions['rules'];
}

export const CheckboxContainer = ({
  sm,
  id: inputId,
  name: inputName,
  label,
  rules,
}: ICheckboxContainerProps) => {
  const classes = useStyles({ sm });
  const { control, errors } = useFormContext();
  const { getFieldValue } = useContext(FormsContext);

  const { getFieldsPrefix } = useContext(FieldsPrefixContext);

  const prefix = getFieldsPrefix();

  let name = inputName;
  let id = inputId || inputName;

  if (prefix) {
    id = `${prefix}${id}`;
    name = `${prefix}.${name}`;
  }

  const defaultChecked = getFieldValue(name) || false;

  const { register } = useForm();

  return (
    <GridContainer item xs={12} sm={sm} noPadding="all">
      <div className={classes.wrapper}>
        <Controller
          name={name}
          rules={rules}
          control={control}
          defaultValue={defaultChecked}
          defaultChecked={defaultChecked}
          render={({ onChange, onBlur, value, name }) => (
            <Checkbox
              id={id}
              name={name}
              onBlur={onBlur}
              onChange={(e) => onChange(e.target.checked)}
              checked={value}
              inputRef={register}
              alignLabelTop
              label={label}
              error={!!errors?.[id]}
            />
          )}
        />
      </div>
    </GridContainer>
  );
};
