import { spacing } from '@loft/copan-tokens';
import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  () =>
    createStyles({
      dialog: {
        'width': '592px',
        '& .MuiDialogTitle-root': {
          paddingLeft: spacing.inner.base10,
          paddingRight: spacing.inner.base10,
        },
      },
      button: {
        float: 'right',
        margin: '20px 0',
        minWidth: 176,
      },
    }),
  {
    name: 'ResponsiveDialogContainerStyles',
    index: 2,
  },
);
