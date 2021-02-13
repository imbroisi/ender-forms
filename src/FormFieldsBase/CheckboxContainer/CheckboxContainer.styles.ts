import { screen, spacing } from '@loft/copan-tokens';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  sm: number | undefined;
}

export default makeStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: (props: Props) => (props.sm ? spacing['05'] : 0),
    [`@media (max-width: ${screen.breakpoint.sm}px)`]: {
      marginTop: () => spacing['01'],
    },
  },
});
