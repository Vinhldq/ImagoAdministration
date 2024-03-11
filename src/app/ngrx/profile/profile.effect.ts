import {inject, Injectable} from "@angular/core";
import {catchError, map, of, switchMap} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProfileService} from "../../service/profile/profile.service";
import * as ProfileAction from "./profile.action";



@Injectable()
export class ProfileEffect {
  constructor(private actions$: Actions, private profileService: ProfileService) {}
  getMineProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileAction.getMineProfile),
      switchMap(async (action) => {
        try {
          console.log('action.idToken :', action.idToken);
          const res = await this.profileService.getMineProfile(action.idToken).toPromise();
          return ProfileAction.getMineProfileSuccess({ profile: res });
        } catch (error) {
          return ProfileAction.getMineProfileFailure({ error: error });
        }
      })
    );
  });
}

