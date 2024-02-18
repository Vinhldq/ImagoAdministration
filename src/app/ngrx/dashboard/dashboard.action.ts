import { createAction, props } from '@ngrx/store';

export const getChart = createAction(
  '[Dashboard] Get Chart',
  props<{ chart: string }>(),
);

export const getChartSuccess = createAction('[Dashboard] Get Chart Success');

export const getChartFailure = createAction(
  '[Dashboard] Get Chart Failure',
  props<{ error: string }>(),
);
