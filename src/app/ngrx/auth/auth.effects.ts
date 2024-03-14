import {Injectable} from '@angular/core';
import * as AuthActions from './auth.actions';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, of, switchMap} from 'rxjs';

import {Store} from '@ngrx/store';
import {AuthService} from '../../service/auth/auth.service';
import * as ReportActions from '../report/report.actions';
import * as ProfileActions from '../profile/profile.actions';
@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private store: Store<{}>
  ) {
  }

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
        return of(AuthActions.loginFailure({errorMessage: error}));
      })
    );
  });

  logout$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AuthActions.logout),
      switchMap(() => {
        this.store.dispatch(ProfileActions.clearState());
        this.store.dispatch(AuthActions.clearIdToken());
        this.store.dispatch(AuthActions.clearAuth());
        return this.authService.logout();
      }),
      map(() => {
        return AuthActions.logoutSuccess();
      }),
      catchError((error) => {
        return of(AuthActions.logoutFailure({errorMessage: error}));
      })
    );
  });
  getAuthById$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AuthActions.getAuthById),
      switchMap((action) => {
        return this.authService.getAuthById(action.token, action.id);
      }),
      map((res) => {
        return AuthActions.getAuthByIdSuccess({auth: res});
      }),
      catchError((error) => {
        return of(AuthActions.getAuthByIdFailure({errorMessage: error}));
      })
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
            return of(AuthActions.getAllAuthFailure({errorMessage: error}));
          })
        );
      })
    )
  );
  changeRole$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.changeRole),
      switchMap((action) => {
        return this.authService.changeRole(action.idToken, action.id, action.role).pipe(
          map((auth: any) => {
            return AuthActions.changeRoleSuccess({
              auth: auth,
            });
          }),
          catchError((error) => {
            return of(AuthActions.changeRoleFailure({errorMessage: error}));
          }),
        );
      }),
    ),
  );
  changeBlock$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.changeBlock),
      switchMap((action) => {
        return this.authService.changeBlock(action.idToken, action.id, action.isBanned).pipe(
          map((auth: any) => {
            return AuthActions.changeBlockSuccess({
              auth: auth,
            });
          }),
          catchError((error) => {
            return of(AuthActions.changeBlockFailure({errorMessage: error}));
          }),
        );
      }),
    ),
  );
  changeUnblock$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.changeUnblock),
      switchMap((action) => {
        return this.authService.changeUnBlock(action.idToken, action.id, action.isBanned).pipe(
          map((auth: any) => {
            return AuthActions.changeUnblockSuccess({
              auth: auth,
            });
          }),
          catchError((error) => {
            return of(AuthActions.changeUnblockFailure({errorMessage: error}));
          }),
        );
      })
    )
  );
}
