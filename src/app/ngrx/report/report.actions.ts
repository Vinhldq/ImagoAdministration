import { createAction, props } from '@ngrx/store';
import { ReportModel } from '../../models/report.model';

export const getAllReports = createAction(
  '[Report] Get All Reports',
  props<{ token: string }>(),
);

export const getAllReportsSuccess = createAction(
  '[Report] Get All Reports Success',
  props<{ reportList: ReportModel[] }>(),
);

export const getAllReportsFailure = createAction(
  '[Report] Get All Reports Failure',
  props<{ errorMessage: string }>(),
);
