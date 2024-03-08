import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import * as ReportActions from './report.actions';
import { ReportService } from '../../service/report/report.service';
import { error } from '@angular/compiler-cli/src/transformers/util';

@Injectable()
export class ReportEffects {
  constructor(
    private action$: Actions,
    private reportService: ReportService,
  ) {}

  getAllReport$ = createEffect(() =>
    this.action$.pipe(
      ofType(ReportActions.getAllReports),
      switchMap((action) => {
        return this.reportService.getAllReport(action.token,).pipe(
          map((reportList: any) => {
            return ReportActions.getAllReportsSuccess({
              reportList: reportList,
            });
          }),
          catchError((error) => {
            return of(
              ReportActions.getAllReportsFailure({ errorMessage: error }),
            );
          }),
        );
      }),
    ),
  );

  getReportStatus$ = createEffect(() =>
    this.action$.pipe(
      ofType(ReportActions.getReportStatus),
      switchMap((action) => {
        return this.reportService.getReportStatus(action.token, action.page).pipe(
          map((reportStatus: any) => {
            return ReportActions.getReportStatusSuccess({
              reportListStatus: reportStatus,
            });
          }),
          catchError((error) => {
            return of(
              ReportActions.getReportStatusFailure({ errorMessage: error }),
            );
          }),
        );
      }),
    ),
  );
}
