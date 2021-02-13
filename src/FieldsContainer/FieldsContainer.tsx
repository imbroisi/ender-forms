import { Grid } from '@loft/copan-components';
import React from 'react';
import { FieldsPrefixContext, FieldsPrefixProvider } from '../FieldsContainer/context';
import useStyles from './FieldsContainer.styles';

interface FieldsContainerProps {
  children: React.ReactNode;
  fieldsPrefix?: string;
}

const FieldsContainerProvider = ({ fieldsPrefix = '', children }: FieldsContainerProps) => {
  const classes = useStyles();
  const { setFieldsPrefix } = React.useContext(FieldsPrefixContext);

  setFieldsPrefix(fieldsPrefix);

  return (
    <Grid container item justify="space-between" className={classes.container}>
      {children}
    </Grid>
  );
};

export const FieldsContainer = (props: FieldsContainerProps) => (
  <FieldsPrefixProvider>
    <FieldsContainerProvider {...props} />
  </FieldsPrefixProvider>
);
