import { color, spacing } from '@loft/copan-tokens';
import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    innerElement: {
      'backgroundColor': color.background.main,
      '& input': {
        padding: spacing.inner.base03,
      },
    },
  }),
);
