import { ReportState } from './report.state';
import { ReportModel } from '../../models/report.model';
import * as ReportActions from './report.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: ReportState = {
  reportList: [],
  isGetAllReport: false,
  isGetAllReportSuccess: false,
  getAllReportErrorMessage: '',
  reportListPagination: {
    data: [],
    endPage: 0,
  },
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
  on(ReportActions.getReportStatus, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isGetAllReport: true,
      isGetAllReportSuccess: false,
    };
  }),
  on(ReportActions.getReportStatusSuccess, (state, { type, reportListStatus }) => {
    console.log(type);
    return {
      ...state,
      isGetAllReport: false,
      isGetAllReportSuccess: true,
      reportListPagination: reportListStatus,
    };
  }
  ),
  on(ReportActions.getReportStatusFailure, (state, { errorMessage, type }) => {
    console.log(type);
    return {
      ...state,
      isGetAllReport: false,
      isGetAllReportSuccess: false,
      getAllReportErrorMessage: errorMessage,
    };
  }
  ),
);
