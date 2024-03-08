import { CategoryState } from './category.state';
import { createReducer, on } from '@ngrx/store';
import * as CategoryAction from './category.actions';

export const initialState: CategoryState = {
  categoryList: {
    data: [],
    endPage: 0,
  },
  isGetAllCategory: false,
  isGetAllCategorySuccess: false,
  getAllCategoryErrorMessage: '',
};

export const categoryReducer = createReducer(
  initialState,
  on(CategoryAction.getAllCategories, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isGetAllCategory: true,
      isGetAllCategorySuccess: false,
    };
  }),
  on(
    CategoryAction.getAllCategoriesSuccess,
    (state, { type, categoryList }) => {
      console.log(type);
      return {
        ...state,
        isGetAllCategory: false,
        isGetAllCategorySuccess: true,
        categoryList: categoryList,
      };
    },
  ),
  on(
    CategoryAction.getAllCategoriesFailure,
    (state, { errorMessage, type }) => {
      console.log(type);
      return {
        ...state,
        isGetAllCategory: false,
        isGetAllCategorySuccess: false,
        getAllCategoryErrorMessage: errorMessage,
      };
    },
  ),
);
