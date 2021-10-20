import { makeStyles } from '@material-ui/core';
import { theme } from '../../assets';

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  root: {
    backgroundColor: theme.palette.background.paper,
  },
});
export default useStyles;
