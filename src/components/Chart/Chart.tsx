import { Box, Typography, useTheme } from '@material-ui/core';
import moment from 'moment';
import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useAppSelector } from '../../hooks';
import useStyles from './styles';

const Chart: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const measurements = useAppSelector((state) => state.measurements.measurements);
  const colors = useAppSelector((state) => state.measurements.colors);

  const dateFormatter = (date: any, isTooltipFormat?: boolean): string => {
    if (isTooltipFormat) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
    return moment(date).format(' h:mm a');
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length && label) {
      return (
        <Box className={classes.tooltip}>
          <Box margin={theme.spacing(0.2)}>
            <Typography variant="subtitle2" gutterBottom>
              {dateFormatter(label, true)}
            </Typography>
            {payload.map((data: any) => (
              <Typography
                key={data.name}
                style={{ color: data.color }}
                variant="subtitle2"
                gutterBottom
              >
                {`${data.name} : ${data.value} ${data.payload.unit} `}
              </Typography>
            ))}
          </Box>
        </Box>
      );
    }
    return null;
  };

  return (
    <Box className={classes.root}>
      <ResponsiveContainer width="95%">
        <LineChart width={theme.spacing(150)} height={theme.spacing(55)}>
          <XAxis
            allowDuplicatedCategory={false}
            dataKey="at"
            tickFormatter={(val) => dateFormatter(val)}
          />
          <YAxis />
          <Tooltip content={CustomTooltip} />
          {measurements.map((measure, index) => (
            <Line
              key={measure.metric}
              name={measure.metric}
              data={measure.measurements || []}
              type="monotone"
              dataKey="value"
              stroke={colors[index]}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};
export default Chart;
