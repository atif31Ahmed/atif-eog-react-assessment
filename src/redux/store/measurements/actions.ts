import { Measurement, MeasurementData } from '../../../types';
import {
  ADD_MEASURE,
  ADD_METRICS,
  ADD_NEW_MEASURE,
  SET_LOADING,
  UPDATE_MEASURE,
} from '../constants';

import { MeasurementTypes } from './types';

export const addMeasurements = (data: MeasurementData[]): MeasurementTypes => ({
  type: ADD_MEASURE,
  payload: data,
});
export const updateMeasurements = (data: Measurement[]): MeasurementTypes => ({
  type: UPDATE_MEASURE,
  payload: data,
});
export const addNewMeasurements = (data: Measurement[]): MeasurementTypes => ({
  type: ADD_NEW_MEASURE,
  payload: data,
});
export const addMetrics = (data: string[]): MeasurementTypes => ({
  type: ADD_METRICS,
  payload: data,
});
export const setIsMeasurementsLoading = (data: boolean): MeasurementTypes => ({
  type: SET_LOADING,
  payload: data,
});
