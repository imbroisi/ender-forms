import { screen, spacing } from '@loft/copan-tokens';
import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    main: {
      margin: `${spacing['01']} 0`,
      [`@media (min-width: ${screen.breakpoint.sm}px)`]: {
        maxWidth: (sm) =>
          typeof sm === 'number' ? `calc(${(sm / 12) * 100}% - ${spacing['03']})` : 'none',
      },
    },
  }),
);
