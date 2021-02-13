import { color, shape, spacing } from '@loft/copan-tokens';
import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    button: {
      'backgroundColor': color.base.neutral[100],
      'border': `1px dashed ${color.base.neutral[300]}`,
      'marginTop': spacing.layout.base02,
      'padding': spacing.inner.base08,
      'minHeight': '130px',
      'width': '100%',
      'borderRadius': shape.border.radius.small,
      '&:hover, &:focus': {
        backgroundColor: `${color.base.neutral[200]}`,
      },
    },
    plusSign: {
      fontSize: '28px',
      marginBottom: spacing['03'],
    },
  }),
);
