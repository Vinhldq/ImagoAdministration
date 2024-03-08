import { createReducer, on } from '@ngrx/store';
import * as PostActions from './post.action';
import { PostState } from './post.state';
import { getALlPost } from './post.action';

export const initialState: PostState = {
  post: [],
  isLoading: false,
  error: '',
};

export const postReducer = createReducer(
  initialState,
  on(PostActions.getALlPost, (state, { post, type }) => {
    console.log(type);
    return {
      ...state,
      post: post,
      isLoading: true,
    };
  }),
  on(PostActions.getPostSuccess, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(PostActions.getPostFailure, (state, { type, error }) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error,
    };
  }),
);
