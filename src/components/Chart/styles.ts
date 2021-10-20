import { makeStyles } from '@material-ui/core';
import { theme } from '../../assets';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '85%',
    alignItems: 'center',
  },
  tooltip: {
    maxWidth: theme.spacing(40),
    maxHeight: theme.spacing(60),
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    borderRadius: theme.spacing(0.2),
  },
});
export default useStyles;
