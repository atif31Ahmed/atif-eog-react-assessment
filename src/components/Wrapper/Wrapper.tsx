import React from 'react';
import useStyles from './styles';
import { IWrapperProps } from './types';

const Wrapper: React.FC<IWrapperProps> = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.wrapper}>{children}</div>;
};

export default Wrapper;
