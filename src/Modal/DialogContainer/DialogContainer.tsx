import { Button, Dialog } from '@loft/copan-components';
import React, { ReactNode } from 'react';
import { useStyles } from './DialogContainer.styles';

interface ResponsiveDialogProps {
  open?: boolean;
  onClose: (save: boolean) => void;
  children: ReactNode;
}

export const DialogContainer = ({ open = false, onClose, children }: ResponsiveDialogProps) => {
  const classes = useStyles();

  return (
    <Dialog
      classes={{
        paper: classes.dialog,
      }}
      closeButton={{
        onClick: () => onClose(false),
      }}
      onClose={() => onClose(false)}
      open={open}
    >
      {children}
      <Button className={classes.button} onClick={() => onClose(true)}>
        Salvar
      </Button>
    </Dialog>
  );
};
