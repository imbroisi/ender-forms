import { color, spacing } from '@loft/copan-tokens';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: spacing['03'],
    borderBottom: `1px solid ${color.base.neutral[200]}`,
    marginBottom: '10px',
  },
  iconWrapper: {
    marginLeft: '20px',
  },
}));
