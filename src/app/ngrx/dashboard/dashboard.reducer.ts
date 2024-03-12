import { DashboardState } from './dashboard.state';
import { createReducer, on } from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';

const initialState: DashboardState = {
  chart: '',
  isLoading: false,
  error: '',
};

export const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.getChart, (state, { chart, type }) => {
    console.log(type);
    return {
      ...state,
      chart: chart,
      isLoading: true,
    };
  }),
  on(DashboardActions.getChartSuccess, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(DashboardActions.getChartFailure, (state, { type, error }) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error,
    };
  })
);
