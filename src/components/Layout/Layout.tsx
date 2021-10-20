import React from 'react';
import { Box, Snackbar } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import Alert from '@material-ui/lab/Alert';
import { useAppSelector } from '../../hooks';
import Chart from '../Chart';
import Chips from '../Chips';
import Header from '../Header';
import MultiSelect from '../MultiSelect';
import Wrapper from '../Wrapper';

const Layout = () => {
  const measurements = useAppSelector((state) => state.measurements.measurements);
  const isLoadding = useAppSelector((state) => state.measurements.isMeasurementsLoading);
  return (
    <Wrapper>
      <Header />
      <Box display="flex" justifyContent="flex-end">
        <MultiSelect />
      </Box>
      <Chips />
      {measurements.length && <Chart />}
      <Snackbar open={isLoadding} autoHideDuration={6000}>
        <Alert severity="info">Loading...</Alert>
      </Snackbar>
      <ToastContainer />
    </Wrapper>
  );
};

export default Layout;
