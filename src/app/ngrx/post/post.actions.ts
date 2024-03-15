import { createAction, props } from '@ngrx/store';
import { AllPostModel, PostModel } from '../../models/post.model';
import { ProfileModel } from '../../models/profile.model';
import { CommentResponse } from '../../models/comment.model';

export const getAllPosts = createAction(
  '[Post] Get All Posts',
  props<{ token: string; page: number; size: number }>()
);

export const getAllPostsSuccess = createAction(
  '[Post] Get All Posts Success',
  props<{ postList: AllPostModel }>()
);

export const getAllPostsFailure = createAction(
  '[Post] Get All Posts Failure',
  props<{ errorMessage: string }>()
);

export const getPostDetail = createAction(
  '[Post] Get Post Detail',
  props<{ token: string; id: string }>()
);

export const getPostDetailSuccess = createAction(
  '[Post] Get Post Detail Success',
  props<{ detailProfile: ProfileModel[] }>()
);

export const getPostDetailFailure = createAction(
  '[Post] Get Post Detail Failure',
  props<{ errorMessage: string }>()
);

export const updatePost = createAction(
  '[Post] Update Post',
  props<{ token: string; post: PostModel; id: string }>()
);

export const updatePostSuccess = createAction(
  '[Post] Update Post Success',
  props<{ updatePost: PostModel }>()
);

export const updatePostFailure = createAction(
  '[Post] Update Post Failure',
  props<{ errorMessage: string }>()
);

export const getCommentByPostId = createAction(
  '[Post] Get Comment By Post Id',
  props<{ token: string; postId: string; page: number }>()
);

export const getCommentByPostIdSuccess = createAction(
  '[Post] Get Comment By Post Id Success',
  props<{ getCommentByPostId: CommentResponse }>()
);

export const getCommentByPostIdFailure = createAction(
  '[Post] Get Comment By Post Id Failure',
  props<{ errorMessage: string }>()
);
