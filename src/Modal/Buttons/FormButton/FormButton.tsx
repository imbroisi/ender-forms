import { Button } from '@loft/copan-components';
import { useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { useStyles } from './FormButton.styles';

type FormButtonProps = {
  onClick: () => void;
};

export const FormButton = ({ onClick }: FormButtonProps) => {
  const classes = useStyles();
  const { breakpoints } = useTheme();

  const isDesktop = useMediaQuery(breakpoints.up('sm'));
  const className = isDesktop ? classes.button : '';

  return (
    <Button fullWidth={!isDesktop} className={className} onClick={onClick}>
      Salvar
    </Button>
  );
};
