import {ListAdminRolePagination, RolePagination} from "../../models/role.model";

export interface RoleState {
  roleList: RolePagination;
  adminRoleList: ListAdminRolePagination;
  isLoading: boolean;
  isSuccessful: boolean;
  errorMessage: string;
  isGetAllRole: boolean;
  isGetAllRoleSuccess: boolean;
  getAllRoleErrorMessage: string;
}
