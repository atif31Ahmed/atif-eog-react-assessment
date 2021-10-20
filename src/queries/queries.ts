import { gql } from '@apollo/client';

export const GET_MEASUREMENTS = gql`
  query ($input: [MeasurementQuery]) {
    getMultipleMeasurements(input: $input) {
      metric
      measurements {
        metric
        at
        value
        unit
      }
    }
  }
`;
export const GET_METRICS = gql`
  query {
    getMetrics
  }
`;

export const MEASUREMENTS_SUBSCRIPTION = gql`
  subscription {
    newMeasurement {
      metric
      at
      value
      unit
    }
  }
`;
