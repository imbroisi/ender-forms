import { TextField } from '@loft/copan-components';
import Cleave from 'cleave.js/react';
import React, { ReactNode, useContext } from 'react';
import type { UseControllerOptions } from 'react-hook-form';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import { FormsContext } from '../../components/Form/context';
import { FieldsPrefixContext } from '../../FieldsContainer/context';
import { GridContainer } from '../GridContainer';
import { IMaskOptions, MaskTextFielsProps, SmProp } from '../interfaces';
import useStyles from './TextFieldContainer.styles';

export interface ITextFieldContainerProps extends SmProp {
  id?: string;
  name: string;
  placeholder?: string;
  label: string;
  helperText?: ReactNode;
  maskOptions?: IMaskOptions;
  defaultValue?: string;
  rules?: UseControllerOptions['rules'];
  InputProps?: any;
  type?: string;
}

const MaskedTextField = (props: MaskTextFielsProps) => {
  const { maskOptions, inputRef, defaultValue, ...other } = props;
  return <Cleave {...other} value={defaultValue} options={maskOptions} />;
};

export const TextFieldContainer = ({
  id: inputId,
  name: inputName,
  sm,
  rules,
  helperText,
  maskOptions,
  ...rest
}: ITextFieldContainerProps) => {
  const classes = useStyles();
  const { control, errors } = useFormContext();
  const { getFieldValue } = useContext(FormsContext);
  const { getFieldsPrefix } = useContext(FieldsPrefixContext);

  const fieldsPrefix = getFieldsPrefix();

  let name = inputName;
  let id = inputId || inputName;

  if (fieldsPrefix) {
    id = `${fieldsPrefix}${id}`;
    name = `${fieldsPrefix}.${name}`;
  }

  const error = errors?.[id];

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
        defaultValue={defaultValue}
        render={({ name, value, ...props }) => (
          <TextField
            id={id}
            name={name}
            fullWidth
            error={!!error}
            helperText={error?.message || helperText}
            inputRef={register}
            InputProps={{
              className: classes.innerElement,
              inputComponent: maskOptions ? MaskedTextField : undefined,
              inputProps: maskOptions ? { maskOptions, defaultValue } : undefined,
            }}
            {...props}
            {...rest}
          />
        )}
      />
    </GridContainer>
  );
};
