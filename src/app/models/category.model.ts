export interface CategoryModel {
  id: string;
  name: string;
  users: string[];
  photoUrl: string;
}

export interface AllCategoryModel {
  data: CategoryModel[];
  endPage: number;
}
