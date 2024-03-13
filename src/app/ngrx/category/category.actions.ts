import { createAction, props } from '@ngrx/store';
import { AllCategoryModel } from '../../models/category.model';

export const getAllCategories = createAction(
  '[Report] Get All Categories',
  props<{ token: string; page: number }>(),
);

export const getAllCategoriesSuccess = createAction(
  '[Report] Get All Categories Success',
  props<{ categoryList: AllCategoryModel }>(),
);

export const getAllCategoriesFailure = createAction(
  '[Report] Get All Categories Failure',
  props<{ errorMessage: string }>(),
);
