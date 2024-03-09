import { ReportState } from './report.state';
import { ReportModel } from '../../models/report.model';
import * as ReportActions from './report.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: ReportState = {
  reportList: [],
  isGetAllReport: false,
  isGetAllReportSuccess: false,
  getAllReportErrorMessage: '',
};

export const reportReducer = createReducer(
  initialState,
  on(ReportActions.getAllReports, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isGetAllReport: true,
      isGetAllReportSuccess: false,
    };
  }),
  on(ReportActions.getAllReportsSuccess, (state, { type, reportList }) => {
    console.log(type);
    return {
      ...state,
      isGetAllReport: false,
      isGetAllReportSuccess: true,
      reportList: reportList,
    };
  }),
  on(ReportActions.getAllReportsFailure, (state, { errorMessage, type }) => {
    console.log(type);
    return {
      ...state,
      isGetAllReport: false,
      isGetAllReportSuccess: false,
      getAllReportErrorMessage: errorMessage,
    };
  }),
);
