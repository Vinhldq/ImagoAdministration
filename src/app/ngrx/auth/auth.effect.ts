import { Injectable } from '@angular/core';
import * as AuthActions from '../auth/auth.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';

import { Store } from '@ngrx/store';
import { AuthService } from '../../service/auth/auth.service';
import * as ReportActions from '../report/report.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private store: Store<{}>,
  ) {}

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AuthActions.login),
      switchMap(() => {
        return this.authService.loginWithGoogle();
      }),
      map(() => {
        return AuthActions.loginSuccess();
      }),
      catchError((error) => {
        return of(AuthActions.loginFailure({ errorMessage: error }));
      }),
    );
  });

  logout$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AuthActions.logout),
      switchMap(() => {
        return this.authService.logout();
      }),
      map(() => {
        return AuthActions.logoutSuccess();
      }),
      catchError((error) => {
        return of(AuthActions.logoutFailure({ errorMessage: error }));
      }),
    );
  });
  getAuthById$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AuthActions.getAuthById),
      switchMap((action) => {
        return this.authService.getAuthById(action.token, action.id);
      }),
      map((res) => {
        return AuthActions.getAuthByIdSuccess({ auth: res });
      }),
      catchError((error) => {
        return of(AuthActions.getAuthByIdFailure({ errorMessage: error }));
      }),
    );
  });

  getAllAuth$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.getAllAuth),
      switchMap((action) => {
        return this.authService.getAllAuth(action.token).pipe(
          map((auth: any) => {
            return AuthActions.getAllAuthSuccess({
              auth: auth,
            });
          }),
          catchError((error) => {
            return of(AuthActions.getAllAuthFailure({ errorMessage: error }));
          }),
        );
      }),
    ),
  );
}
