import { Button, Typography } from '@loft/copan-components';
import React, { FC } from 'react';
import { GridContainer } from '../GridContainer';
import { SmProp } from '../interfaces';
import useStyles from './AddButtonContainer.styles';

interface AddButtonContainerProps extends SmProp {
  label: string;
  onClick: () => void;
}

export const AddButtonContainer: FC<AddButtonContainerProps> = ({ label, onClick, sm }) => {
  const classes = useStyles();

  return (
    <GridContainer item xs={12} sm={sm} noPadding="all">
      <Button className={classes.button} color="default" transparent={true} onClick={onClick}>
        <div>
          <div className={classes.plusSign}>+</div>
          <Typography variant="label-sm">{label}</Typography>
        </div>
      </Button>
    </GridContainer>
  );
};
