import { CloseIcon, Icon, IconButton, Typography } from '@loft/copan-components';
import { useMediaQuery, useTheme } from '@material-ui/core';
import React, { ReactNode } from 'react';
import { DialogContainer } from './DialogContainer';
import { DrawerContainer } from './DrawerContainer';
import useStyles from './Modal.styles';

interface ModalSpouseInformationProps {
  title: string;
  open?: boolean;
  onClose: (save: boolean) => void;
  children: ReactNode;
}

export const Modal = ({ onClose, ...rest }: ModalSpouseInformationProps) => {
  const { breakpoints } = useTheme();
  const classes = useStyles();

  const isDesktop = useMediaQuery(breakpoints.up('sm'));
  const ModalContainer = isDesktop ? DialogContainer : DrawerContainer;

  return (
    <ModalContainer {...rest} onClose={onClose}>
      <div className={classes.header}>
        <Typography variant="subtitle">{rest.title}</Typography>
        <IconButton
          transparent
          color="default"
          onClick={() => onClose(false)}
          className={classes.iconWrapper}
        >
          <Icon size="md" title="Fechar">
            <CloseIcon />
          </Icon>
        </IconButton>
      </div>
      {rest.children}
    </ModalContainer>
  );
};
