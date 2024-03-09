import { PostState } from './post.state';
import { createReducer, on } from '@ngrx/store';
import * as PostAction from './post.actions';

export const initialPostState: PostState = {
  postList: {
    data: [],
    endPage: 0,
  },
  isGetAllPost: false,
  isGetAllPostSuccess: false,
  getAllPostErrorMessage: '',
};

export const postReducer = createReducer(
  initialPostState,
  on(PostAction.getAllPosts, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isGetAllPost: true,
      isGetAllPostSuccess: false,
    };
  }),
  on(PostAction.getAllPostsSuccess, (state, { type, postList }) => {
    console.log(type);
    return {
      ...state,
      isGetAllPost: false,
      isGetAllPostSuccess: true,
      postList: postList,
    };
  }),
  on(PostAction.getAllPostsFailure, (state, { errorMessage, type }) => {
    console.log(type);
    return {
      ...state,
      isGetAllPost: false,
      isGetAllPostSuccess: false,
      getAllPostErrorMessage: errorMessage,
    };
  }),
);
