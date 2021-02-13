import { Grid } from '@loft/copan-components';
import React, { ReactNode, useRef } from 'react';
import { SwipeableDrawer } from '../../components/SwipeableDrawer/SwipeableDrawer';
import { FixedButton, FixedButtonPosition } from '../Buttons/FixedButton';
import { FormButton } from '../Buttons/FormButton';

interface DrawerContainerProps {
  open?: boolean;
  onClose: (save: boolean) => void;
  children: ReactNode;
}

export const DrawerContainer = ({ open = false, onClose, children }: DrawerContainerProps) => {
  const buttonRef = useRef();

  return (
    <SwipeableDrawer onClose={() => onClose(false)} open={open}>
      <Grid container={true} item={true}>
        <Grid item={true} xs={12} noPadding="all">
          {children}
        </Grid>
      </Grid>
      <Grid item={true} xs={12} noPadding="vertical">
        <FixedButton
          Button={() => <FormButton onClick={() => onClose(true)} />}
          buttonRef={buttonRef}
          noScroll={true}
          offsetY={0}
          position={FixedButtonPosition.BOTTOM}
        />
      </Grid>
    </SwipeableDrawer>
  );
};
