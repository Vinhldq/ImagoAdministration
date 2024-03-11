import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import * as ReportActions from './report.actions';
import { ReportService } from '../../service/report/report.service';
import { AllReportModel } from '../../models/report.model';

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
        return this.reportService
          .getAllReportStatusPending(action.token, action.page, action.types)
          .pipe(
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

  allReport$ = createEffect(() =>
    this.action$.pipe(
      ofType(ReportActions.allReport),
      switchMap((action) => {
        return this.reportService.getAllReport(action.token).pipe(
          map((allReport: any) => {
            return ReportActions.allReportSuccess({ allReport: allReport });
          }),
          catchError((error) => {
            return of(ReportActions.allReportFailure({ errorMessage: error }));
          }),
        );
      }),
    ),
  );
}
