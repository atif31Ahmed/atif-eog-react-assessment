import React from 'react';
import { Box, Chip } from '@material-ui/core';
import { useAppSelector } from '../../hooks';
import useStyles from './styles';
import { MetricsLiteral } from '../../types';

const Chips = () => {
  const measurements = useAppSelector((state) => state.measurements.measurements);
  const metric = useAppSelector((state) => state.measurements.newMetrics);
  const colors = useAppSelector((state) => state.measurements.colors);
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {measurements.map((measure, index) => (
        <Chip
          key={measure.metric}
          className={classes.chip}
          label={`${measure.metric} : ${metric[measure.metric as MetricsLiteral].value} ${
            metric[measure.metric as MetricsLiteral].unit
          }`}
          variant="outlined"
          style={{ color: colors[index], borderColor: colors[index] }}
          //   style={{ backgroundColor: theme.palette.primary.main }}
        />
      ))}
    </Box>
  );
};
export default Chips;
