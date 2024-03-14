import {createAction, props} from '@ngrx/store';
import {AuthModel} from '../../models/auth.model';

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

export const changeRole = createAction(
  '[Auth] Change Role',
  props<{ idToken: string, id: string; role: string }>(),
);

export const changeRoleSuccess = createAction(
  '[Auth] Change Role Success',
  props<{ auth: AuthModel }>(),
);

export const changeRoleFailure = createAction(
  '[Auth] Change Role Failure',
  props<{ errorMessage: string }>(),
);

export const changeBlock = createAction(
  '[Auth] Change Block',
  props<{ idToken: string, id: string; isBanned: boolean }>(),
);
export const changeBlockSuccess = createAction(
  '[Auth] Change Block Success',
  props<{ auth: AuthModel }>(),
);
export const changeBlockFailure = createAction(
  '[Auth] Change Block Failure',
  props<{ errorMessage: string }>(),
);

export const changeUnblock = createAction(
  '[Auth] Change Unblock',
  props<{ idToken: string, id: string; isBanned: boolean }>(),
);
export const changeUnblockSuccess = createAction(
  '[Auth] Change Unblock Success',
  props<{ auth: AuthModel }>(),
);
export const changeUnblockFailure = createAction(
  '[Auth] Change Unblock Failure',
  props<{ errorMessage: string }>(),
);

export const clearIdToken = createAction('[Auth] Clear Id Token');
