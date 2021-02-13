import { color, spacing } from '@loft/copan-tokens';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { FixedButtonPosition, FixedButtonProps } from './FixedButton';

export type FixedButtonStyleProps = Omit<FixedButtonProps, 'Button' | 'buttonRef'>;

export const useStyles = makeStyles<null, FixedButtonStyleProps>(() =>
  createStyles({
    button: {
      width: '100%',
    },
    fixedBox: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      textAlign: 'center',
      backgroundColor: color.background.main,
      position: 'fixed',
      top: ({ position }) => (position === FixedButtonPosition.TOP ? -150 : 'initial'),
      bottom: ({ position }) => (position === FixedButtonPosition.BOTTOM ? -150 : 'initial'),
      left: 0,
      zIndex: 2,
      padding: spacing['03'],
      transition: 'top 200ms, bottom 200ms',
      borderTop: '1px solid #0000001F',
    },
    showFixedBox: {
      top: ({ position, offsetY }) => (position === FixedButtonPosition.TOP ? offsetY : 'initial'),
      bottom: ({ position, offsetY }) =>
        position === FixedButtonPosition.BOTTOM ? offsetY : 'initial',
    },
  }),
);
