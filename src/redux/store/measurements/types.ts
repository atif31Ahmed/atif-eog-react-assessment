import { Measurement, MeasurementData, MetricsOptions, NewMetricsType } from '../../../types';
import { ADD_MEASURE } from '../constants';

interface IMeasurementAction {
  type: typeof ADD_MEASURE;
  payload: boolean | MeasurementData[] | string[] | Measurement[] | Measurement;
}

export interface IMeasurementsState {
  isMeasurementsLoading: boolean;
  newMetrics: NewMetricsType;
  metrics: MetricsOptions[];
  measurements: MeasurementData[];
  colors: string[];
}

export type MeasurementTypes = IMeasurementAction;
