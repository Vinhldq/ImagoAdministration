import { inject, Injectable } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProfileService } from '../../service/profile/profile.service';
import * as ProfileAction from './profile.actions';
import * as ReportActions from '../report/report.actions';
import { ProfileModel } from '../../models/profile.model';

@Injectable()
export class ProfileEffect {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}

  getMineProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileAction.getMineProfile),
      switchMap((action) => {
        return this.profileService.getMineProfile(action.idToken).pipe(
          map((profile: ProfileModel) => {
            return ProfileAction.getMineProfileSuccess({
              ...profile,
              profile: profile,
            });
          }),
          catchError((error) => {
            return of(ProfileAction.getMineProfileFailure({ error: error }));
          })
        );
      })
    )
  );

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
              ProfileAction.getProfileByIdFailure({ errorMessage: error })
            );
          })
        );
      })
    )
  );
}
