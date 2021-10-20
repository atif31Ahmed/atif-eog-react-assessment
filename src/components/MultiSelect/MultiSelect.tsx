import React from 'react';
import { Box } from '@material-ui/core';
import Select from 'react-select';
import { useApollo, useAppSelector } from '../../hooks';
import { QueryType } from '../../types';
import useStyles from './styles';
import { OptionType } from './types';

const MultiSelect = () => {
  const classes = useStyles();
  const options = useAppSelector((state) => state.measurements.metrics);
  const { getMeasurements } = useApollo();
  const getPassDate = () => new Date(new Date().getTime() - 30 * 60000).getTime();
  const hanlderChange = (value: any) => {
    const input = value.map((data: OptionType) => ({ metricName: data.label, after: getPassDate() } as QueryType));
    getMeasurements({ input });
  };

  return (
    <Box className={classes.root}>
      <Select onChange={hanlderChange} isMulti options={options} />
    </Box>
  );
};

export default MultiSelect;
