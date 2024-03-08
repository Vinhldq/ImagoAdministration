import {createAction, props} from "@ngrx/store";
import {RoleDomain} from "./role.domain";

export const getAllRole = createAction('[Role] Get All Role');

export const getAllRoleSuccess = createAction('[Role] Get All Role Success', props<{ role: RoleDomain[] }>());

export const getAllRoleFailure = createAction('[Role] Get All Role Failure', props<{ error: string }>());

export const createRole = createAction('[Role] Create Role', props<{ role: RoleDomain }>());

export const createRoleSuccess = createAction('[Role] Create Role Success', props<{ role: RoleDomain }>());

export const createRoleFailure = createAction('[Role] Create Role Failure', props<{ error: string }>());

export const updateRole = createAction('[Role] Update Role', props<{ role: RoleDomain }>());
export const updateRoleSuccess = createAction('[Role] Update Role Success', props<{ role: RoleDomain }>());
export const updateRoleFailure = createAction('[Role] Update Role Failure', props<{ error: string }>());

export const deleteRole = createAction('[Role] Delete Role', props<{ id: string }>());
export const deleteRoleSuccess = createAction('[Role] Delete Role Success', props<{ id: string }>());
export const deleteRoleFailure = createAction('[Role] Delete Role Failure', props<{ error: string }>());
