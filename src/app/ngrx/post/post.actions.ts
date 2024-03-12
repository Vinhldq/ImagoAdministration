import { createAction, props } from '@ngrx/store';
import { AllPostModel, AllPostProfile } from '../../models/post.model';

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

export const getCreatorName = createAction(
  '[Post] Get Creator Name',
  props<{ token: string; page: number; size: number }>()
);

export const getCreatorNameSuccess = createAction(
  '[Post] Get Creator Name Success',
  props<{ postCreatorName: AllPostProfile }>()
);

export const getCreatorNameFailure = createAction(
  '[Post] Get Creator Name Failure',
  props<{ errorMessage: string }>()
);
