import { MeasurementData, MeasurementsQuery } from '../../types';

export type UseApolloResponse = {
  getMeasurements(input: MeasurementsQuery): void;
};
export type Response = {
  getMultipleMeasurements: MeasurementData[];
};
export type MetricResponse = {
  getMetrics: string[];
};
