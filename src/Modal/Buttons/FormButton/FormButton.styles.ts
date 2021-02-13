import { spacing } from '@loft/copan-tokens';
import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    button: {
      float: 'right',
      marginTop: spacing.layout.base04,
      width: 176,
    },
  }),
);
