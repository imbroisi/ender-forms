import { screen } from '@loft/copan-tokens';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  container: {
    [`@media (max-width: ${screen.breakpoint.sm}px)`]: {
      marginBottom: '90px',
    },
  },
}));
