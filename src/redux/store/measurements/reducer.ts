import { Measurement, MeasurementData } from '../../../types';
import {
  ADD_MEASURE,
  ADD_METRICS,
  ADD_NEW_MEASURE,
  SET_LOADING,
  UPDATE_MEASURE,
} from '../constants';
import { IMeasurementsState, MeasurementTypes } from './types';

const InitialState: Readonly<IMeasurementsState> = {
  newMetrics: {
    oilTemp: {
      unit: '',
      metric: '',
      at: '',
      value: 0,
    },
    casingPressure: {
      unit: '',
      metric: '',
      at: '',
      value: 0,
    },
    flareTemp: {
      unit: '',
      metric: '',
      at: '',
      value: 0,
    },
    injValveOpen: {
      unit: '',
      metric: '',
      at: '',
      value: 0,
    },
    tubingPressure: {
      unit: '',
      metric: '',
      at: '',
      value: 0,
    },
    waterTemp: {
      unit: '',
      metric: '',
      at: '',
      value: 0,
    },
  },
  metrics: [],
  measurements: [],
  colors: ['#d7617b', '#369fd2', '#6057a3', '#e89f5e', '#02a402', '#ffffff'],
  isMeasurementsLoading: false,
};

const measurementsReducer = (state = InitialState, { type, payload }: MeasurementTypes) => {
  switch (type) {
    case ADD_MEASURE:
      return {
        ...state,
        measurements: payload as MeasurementData[],
      };
    case ADD_NEW_MEASURE:
      return {
        ...state,
        newMetrics: {
          ...state.newMetrics,
          [(payload as Measurement).metric]: payload as Measurement,
        },
      };

    case UPDATE_MEASURE:
      return {
        ...state,
        measurements: state.measurements.map((measure) => {
          if (measure.metric === (payload as Measurement).metric) {
            return { ...measure, measurements: [...measure.measurements, payload as Measurement] };
          }
          return measure;
        }),
      };
    case ADD_METRICS:
      return {
        ...state,
        metrics: (payload as string[]).map((metric) => ({ value: metric, label: metric })),
      };
    case SET_LOADING:
      return {
        ...state,
        isMeasurementsLoading: payload as boolean,
      };

    default:
      return state;
  }
};
export default measurementsReducer;
