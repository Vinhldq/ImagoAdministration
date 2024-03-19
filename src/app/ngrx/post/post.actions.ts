import { createAction, props } from '@ngrx/store';
import { AllPostModel } from '../../models/post.model';
import { ProfileModel } from '../../models/profile.model';

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
