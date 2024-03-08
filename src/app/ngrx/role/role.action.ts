import {createAction, props} from "@ngrx/store";
import {RoleModel, RolePagination} from "../../models/role.model";

export const getAllRole = createAction('[Role] Get All Role', props<{ token: string, page: number }>());

export const getAllRoleSuccess = createAction('[Role] Get All Role Success', props<{ roleList: RolePagination[] }>());

export const getAllRoleFailure = createAction('[Role] Get All Role Failure', props<{ error: string }>());

export const getAllSearchRole = createAction('[Role] Get All Search Role', props<{ token: string, page: number }>());
export const getAllSearchRoleSuccess = createAction('[Role] Get All Search Role Success', props<{
  roles: RoleModel[]
}>());
export const getAllSearchRoleFailure = createAction('[Role] Get All Search Role Failure', props<{ error: string }>());

export const createRole = createAction('[Role] Create Role', props<{ role: RoleModel }>());

export const createRoleSuccess = createAction('[Role] Create Role Success', props<{ roles: RoleModel }>());

export const createRoleFailure = createAction('[Role] Create Role Failure', props<{ error: string }>());

export const updateRole = createAction('[Role] Update Role', props<{ role: RoleModel }>());
export const updateRoleSuccess = createAction('[Role] Update Role Success', props<{ roles: RoleModel }>());
export const updateRoleFailure = createAction('[Role] Update Role Failure', props<{ error: string }>());

export const deleteRole = createAction('[Role] Delete Role', props<{ id: string }>());
export const deleteRoleSuccess = createAction('[Role] Delete Role Success', props<{ id: string }>());
export const deleteRoleFailure = createAction('[Role] Delete Role Failure', props<{ error: string }>());
