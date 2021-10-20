import { useLazyQuery, useQuery, useSubscription } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { GET_MEASUREMENTS, GET_METRICS, MEASUREMENTS_SUBSCRIPTION } from '../../queries';
import { MeasurementsQuery, MeasurementSubscription } from '../../types';
import { UseApolloResponse, Response, MetricResponse } from './types';
import {
  addMeasurements,
  addMetrics,
  addNewMeasurements,
  setIsMeasurementsLoading,
  // updateMeasurements,
  // updateMeasurements,
} from '../../redux';
import { useAppSelector } from '..';

const useApollo = (): UseApolloResponse => {
  const dispatch = useDispatch();
  const measurements = useAppSelector((state) => state.measurements.measurements);
  useSubscription<MeasurementSubscription>(MEASUREMENTS_SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData }) => {
      if (measurements.length && subscriptionData.data?.newMeasurement) {
        dispatch(addNewMeasurements(subscriptionData.data?.newMeasurement!));
        // dispatch(updateMeasurements(subscriptionData.data?.newMeasurement!));
      }
    },
  });
  useQuery<MetricResponse>(GET_METRICS, {
    onCompleted: (data) => {
      dispatch(addMetrics(data.getMetrics));
    },
  });
  const [get] = useLazyQuery<Response, MeasurementsQuery>(GET_MEASUREMENTS, {
    onCompleted: (data) => {
      dispatch(setIsMeasurementsLoading(false));
      dispatch(addMeasurements(data.getMultipleMeasurements));
    },
  });

  return {
    getMeasurements(input: MeasurementsQuery) {
      dispatch(setIsMeasurementsLoading(true));
      get({ variables: input });
    },
  };
};

export default useApollo;
