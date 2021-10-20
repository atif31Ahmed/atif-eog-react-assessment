import { combineReducers } from 'redux';
import { measurementsReducer } from './measurements';

export const rootReducer = combineReducers({
  measurements: measurementsReducer,
});
