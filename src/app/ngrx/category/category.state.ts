import { AllCategoryModel } from '../../models/category.model';

export interface CategoryState {
  categoryList: AllCategoryModel;
  isGetAllCategory: boolean;
  isGetAllCategorySuccess: boolean;
  getAllCategoryErrorMessage: string;
}
