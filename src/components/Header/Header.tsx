import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Weather from '../../Features/Weather/Weather';
import useStyles from './styles';

const Header: React.FC = () => {
  const classes = useStyles();

  const name = "atif's";

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {name} EOG React Visualization Assessment
        </Typography>
        <Weather />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
