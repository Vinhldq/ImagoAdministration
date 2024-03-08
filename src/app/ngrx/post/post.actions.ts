import { createAction, props } from '@ngrx/store';
import { AllPostModel } from '../../models/post.model';

export const getAllPosts = createAction(
  '[Post] Get All Posts',
  props<{ token: string; page: number }>(),
);

export const getAllPostsSuccess = createAction(
  '[Post] Get All Posts Success',
  props<{ postList: AllPostModel }>(),
);

export const getAllPostsFailure = createAction(
  '[Post] Get All Posts Failure',
  props<{ errorMessage: string }>(),
);
