import {RoleDomain, RolePagination} from "./role.domain";

export interface RoleState {
  roles: RolePagination[];
  loading: boolean;
  error: string;
}
