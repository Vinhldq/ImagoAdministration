import {RoleModel, RolePagination} from "../../models/role.model";

export interface RoleState {
  roleList: RolePagination[];
  isGetAllRole: boolean;
  isGetAllRoleSuccess: boolean;
  getAllRoleErrorMessage: string;
}
