import { makeStyles } from '@material-ui/core';
import { theme } from '../../assets';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(1, 0, 1, 0),
  },
  chip: {
    margin: theme.spacing(0, 1, 0, 1),
  },
});
export default useStyles;
