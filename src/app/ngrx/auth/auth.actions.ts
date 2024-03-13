import { createAction, props } from '@ngrx/store';
import { AuthModel } from '../../models/auth.model';

export const login = createAction('[Auth] Login');

export const loginSuccess = createAction('[Auth] Login Success');

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ errorMessage: string }>(),
);

export const logout = createAction('[Auth] Logout');

export const logoutSuccess = createAction('[Auth] Logout Success');

export const logoutFailure = createAction(
  '[Auth] Logout Failure',
  props<{ errorMessage: string }>(),
);

export const storedIdToken = createAction(
  '[Auth] Stored Id Token',
  props<{ idToken: string }>(),
);

export const storedUserUid = createAction(
  '[Auth] Stored User Uid',
  props<{ uid: string }>(),
);
export const getAuthById = createAction(
  '[Auth] Get Auth By Id',
  props<{ token: string; id: string }>(),
);

export const getAuthByIdSuccess = createAction(
  '[Auth] Get Auth By Id Success',
  props<{ auth: AuthModel }>(),
);

export const getAuthByIdFailure = createAction(
  '[Auth] Get Auth By Id Failure',
  props<{ errorMessage: string }>(),
);

export const getAllAuth = createAction(
  '[Auth] Get All Auth',
  props<{ token: string }>(),
);
export const getAllAuthSuccess = createAction(
  '[Auth] Get All Auth Success',
  props<{ auth: AuthModel[] }>(),
);
export const getAllAuthFailure = createAction(
  '[Auth] Get All Auth Failure',
  props<{ errorMessage: string }>(),
);

export const clearAuth = createAction('[Auth] Clear Auth');