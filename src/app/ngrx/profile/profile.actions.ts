import {AuthNoProfilePagination, AuthProfilePagination, ProfileModel} from '../../models/profile.model';
import {createAction, props} from '@ngrx/store';

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
export const getAllAuthProfile = createAction(
  '[Profile] Get All Auth Profile',
  props<{ token: string; page: number; size: number }>(),
);
export const getAllAuthProfileSuccess = createAction(
  '[Profile] Get All Auth Profile Success',
  props<{ authProfile: AuthProfilePagination }>(),
);
export const getAllAuthProfileFailure = createAction(
  '[Profile] Get All Auth Profile Failure',
  props<{ errorMessage: string }>(),
);
export const getAllAuthNoProfile = createAction(
  '[Profile] Get All Auth No Profile',
  props<{ token: string; page: number; size: number }>(),
);
export const getAllAuthNoProfileSuccess = createAction(
  '[Profile] Get All Auth No Profile Success',
  props<{ authNoProfile: AuthNoProfilePagination }>(),
);
export const getAllAuthNoProfileFailure = createAction(
  '[Profile] Get All Auth No Profile Failure',
  props<{ errorMessage: string }>(),
);

export const clearState = createAction('[Profile] Clear State');
