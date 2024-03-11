import { inject, Injectable } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProfileService } from '../../service/profile/profile.service';
import * as ProfileAction from './profile.action';
import * as ReportActions from '../report/report.actions';

@Injectable()
export class ProfileEffect {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
  ) {}

  getMineProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileAction.getMineProfile),
      switchMap((action) => {
        let temp = this.profileService.getUserProfile(action.idToken);
        console.log(temp);
        return temp;
      }),
      map((res) => {
        return ProfileAction.getMineProfileSuccess({ profile: res });
      }),
      catchError((error) => {
        return of(ProfileAction.getMineProfileFailure({ error: error }));
      }),
    );
  });

  getProfileById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileAction.getProfileById),
      switchMap((action) => {
        return this.profileService.getProfileById(action.token, action.id).pipe(
          map((profile: any) => {
            console.log(profile);
            return ProfileAction.getProfileByIdSuccess({
              profile: profile,
            });
          }),
          catchError((error) => {
            return of(
              ProfileAction.getProfileByIdFailure({ errorMessage: error }),
            );
          }),
        );
      }),
    ),
  );
}
