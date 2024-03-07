import { createReducer, on } from '@ngrx/store';
import * as PostManagementActions from './post-management.action';
import { PostManagementState } from './post-management.state';

const initialState: PostManagementState = {
  post: [],
  isLoading: false,
  error: '',
};

export const postManagementReducer = createReducer(
  initialState,
  on(PostManagementActions.getPost, (state, { post, type }) => {
    console.log(type);
    return {
      ...state,
      post: post,
      isLoading: true,
    };
  }),
  on(PostManagementActions.getPostSuccess, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(PostManagementActions.getPostFailure, (state, { type, error }) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error,
    };
  }),
);
