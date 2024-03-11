export interface RoleModel {
  name: string
  description: string
  id: string
}

export interface RolePagination {
  data: RoleModel[];
  endPage: number;
}
