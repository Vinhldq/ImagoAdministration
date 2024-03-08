import {inject, Injectable} from "@angular/core";
import {catchError, map, of, switchMap} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProfileService} from "../../service/profile/profile.service";
import * as ProfileAction from "./profile.action";



@Injectable()
export class ProfileEffect {
  constructor(private actions$: Actions, private profileService: ProfileService) {}


  getMineProfile$ = createEffect(() =>{
    return this.actions$.pipe(
      ofType(ProfileAction.getMineProfile),
      switchMap((action) => {
        let temp = this.profileService.getUserProfile(action.idToken);
        console.log(temp);
        return temp;
      }),
          map((res)=>{
            return ProfileAction.getMineProfileSuccess({profile: res});
          }),
        catchError((error) => {
          return of(ProfileAction.getMineProfileFailure({error: error}));
        })
    )
      }
    )



}

