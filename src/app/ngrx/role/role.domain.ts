export interface RoleDomain {
  name: string
  description: string
  id: string
}

export interface RolePagination{
  data: RoleDomain[];
  endPage: number;
}
