export type Measurement = {
  metric: string;
  at: string;
  value: number;
  unit: string;
};
export type MeasurementSubscription = {
  newMeasurement: Measurement[];
};
export type MeasurementData = {
  metric: string;
  measurements: Measurement[];
};
export type QueryType = {
  metricName: String;
  after?: number;
  before?: number;
};
export type MeasurementsQuery = {
  input: QueryType[];
};
export type NewMetricsType = {
  oilTemp: Measurement;
  tubingPressure: Measurement;
  casingPressure: Measurement;
  waterTemp: Measurement;
  injValveOpen: Measurement;
  flareTemp: Measurement;
};
export type MetricsLiteral = keyof NewMetricsType;
export type MetricsOptions = {
  value: string;
  label: string;
};
