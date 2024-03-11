import { ReportState } from './report.state';
import { ReportModel } from '../../models/report.model';
import * as ReportActions from './report.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: ReportState = {
  reportList: {
    data: [],
    endPage: 0,
  },
  isGetAllReport: false,
  isGetAllReportSuccess: false,
  getAllReportErrorMessage: '',
  reportListPagination: {
    data: [],
    endPage: 0,
  },

  allReport: [],
  isAllReport: false,
  isAllReportSuccess: false,
  allReportErrorMessage: '',
};

export const reportReducer = createReducer(
  initialState,
  on(ReportActions.getAllReports, (state, { type }) => {
    return {
      ...state,
      isGetAllReport: true,
      isGetAllReportSuccess: false,
    };
  }),
  on(ReportActions.getAllReportsSuccess, (state, { type, reportList }) => {
    return {
      ...state,
      isGetAllReport: false,
      isGetAllReportSuccess: true,
      reportList: reportList,
    };
  }),
  on(ReportActions.getAllReportsFailure, (state, { errorMessage, type }) => {
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

  on(ReportActions.allReport, (state, { type }) => {
    return {
      ...state,
      isAllReport: true,
      isAllReportSuccess: false,
    };
  }),
  on(ReportActions.allReportSuccess, (state, { type, allReport }) => {
    return {
      ...state,
      isAllReport: false,
      isAllReportSuccess: true,
      allReport: allReport,
    };
  }),
  on(ReportActions.allReportFailure, (state, { errorMessage, type }) => {
    return {
      ...state,
      isAllReport: false,
      isAllReportSuccess: false,
      allReportErrorMessage: errorMessage,
    };
  }),
);
