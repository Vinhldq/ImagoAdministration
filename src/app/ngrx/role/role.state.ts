import {RoleDomain} from "./role.domain";

export interface RoleState {
  roles: RoleDomain[];
  loading: boolean;
  error: string;
}
