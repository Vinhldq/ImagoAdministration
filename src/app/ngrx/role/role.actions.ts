import {createAction, props} from "@ngrx/store";
import {ListAdminRolePagination, RoleModel, RolePagination} from "../../models/role.model";

export const getAllRole = createAction('[Role] Get All Role', props<{ token: string, page: number, size: number }>());

export const getAllRoleSuccess = createAction('[Role] Get All Role Success', props<{ roleList: RolePagination }>());

export const getAllRoleFailure = createAction('[Role] Get All Role Failure', props<{ error: string }>());
export const getListAdminRole = createAction('[Role] Get List Admin Role', props<{
  token: string,
  page: number,
  size: number
}>());

export const getListAdminRoleSuccess = createAction('[Role] Get List Admin Role Success', props<{
  roleList: ListAdminRolePagination
}>());

export const getListAdminRoleFailure = createAction('[Role] Get List Admin Role Failure', props<{ error: string }>());

export const createRole = createAction('[Role] Create Role', props<{ token: string, role: RoleModel }>());

export const createRoleSuccess = createAction('[Role] Create Role Success', props<{ roles: RoleModel }>());

export const createRoleFailure = createAction('[Role] Create Role Failure', props<{ error: string }>());

export const updateRole = createAction('[Role] Update Role', props<{ token: string, id: string, role: RoleModel }>());
export const updateRoleSuccess = createAction('[Role] Update Role Success', props<{ roles: RoleModel }>());
export const updateRoleFailure = createAction('[Role] Update Role Failure', props<{ error: string }>());

export const deleteRole = createAction('[Role] Delete Role', props<{ token: string, id: string }>());
export const deleteRoleSuccess = createAction('[Role] Delete Role Success', props<{ id: string }>());
export const deleteRoleFailure = createAction('[Role] Delete Role Failure', props<{ error: string }>());
