import { Grid, GridProps } from '@loft/copan-components';
import React, { FC } from 'react';
import useStyles from './GridContainer.styles';

export const GridContainer: FC<GridProps> = (props) => {
  const classes = useStyles(props.sm);
  return <Grid className={classes.main} {...props} />;
};
