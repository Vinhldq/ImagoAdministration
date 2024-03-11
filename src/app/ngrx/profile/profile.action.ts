import { ProfileModel } from '../../models/profile.model';
import { createAction, props } from '@ngrx/store';

export const getMineProfile = createAction(
  '[Profile] Get',
  props<{ idToken: string }>(),
);
export const getMineProfileSuccess = createAction(
  '[Profile] Get Success',
  props<{ profile: ProfileModel }>(),
);
export const getMineProfileFailure = createAction(
  '[Profile] Get Failure',
  props<{ error: any }>(),
);

export const getProfileById = createAction(
  '[Profile] Get By Id',
  props<{ token: string; id: string }>(),
);
export const getProfileByIdSuccess = createAction(
  '[Profile] Get By Id Success',
  props<{ profile: ProfileModel }>(),
);
export const getProfileByIdFailure = createAction(
  '[Profile] Get By Id Failure',
  props<{ errorMessage: string }>(),
);
