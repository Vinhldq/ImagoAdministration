import { PostState } from './post.state';
import { createReducer, on } from '@ngrx/store';
import * as PostAction from './post.actions';
import { ProfileModel } from '../../models/profile.model';
import { PostModel } from '../../models/post.model';

export const initialPostState: PostState = {
  postList: {
    data: [],
    endPage: 0,
  },
  detailProfile: [] as ProfileModel[],
  updatePost: {} as PostModel,
  isGetAllPost: false,
  isGetAllPostSuccess: false,
  getAllPostErrorMessage: '',
};

export const postReducer = createReducer(
  initialPostState,
  on(PostAction.getAllPosts, (state, { type }) => {
    return {
      ...state,
      isGetAllPost: true,
      isGetAllPostSuccess: false,
    };
  }),
  on(PostAction.getAllPostsSuccess, (state, { type, postList }) => {
    return {
      ...state,
      isGetAllPost: false,
      isGetAllPostSuccess: true,
      postList: postList,
    };
  }),
  on(PostAction.getAllPostsFailure, (state, { errorMessage, type }) => {
    return {
      ...state,
      isGetAllPost: false,
      isGetAllPostSuccess: false,
      getAllPostErrorMessage: errorMessage,
    };
  }),
  on(PostAction.getPostDetail, (state) => ({
    ...state,
    isGetAllPost: true,
    isGetAllPostSuccess: false,
  })),
  on(PostAction.getPostDetailSuccess, (state, { detailProfile }) => ({
    ...state,
    detailProfile: [...state.detailProfile],
    isGetAllPost: false,
    isGetAllPostSuccess: true,
  })),
  on(PostAction.getPostDetailFailure, (state, { errorMessage }) => ({
    ...state,
    isGetAllPost: false,
    isGetAllPostSuccess: false,
    getAllPostErrorMessage: errorMessage,
  })),
  on(PostAction.updatePost, (state) => ({
    ...state,
    isGetAllPost: true,
    isGetAllPostSuccess: false,
  })),
  on(PostAction.updatePostSuccess, (state, { updatePost }) => ({
    ...state,
    updatePost: updatePost,
    isGetAllPost: false,
    isGetAllPostSuccess: true,
  })),

  on(PostAction.updatePostFailure, (state, { errorMessage }) => ({
    ...state,
    isGetAllPost: false,
    isGetAllPostSuccess: false,
    getAllPostErrorMessage: errorMessage,
  }))
);
