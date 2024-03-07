import { createAction, props } from '@ngrx/store';

export const getPost = createAction('[Post] Get Post', props<{ post: [] }>());

export const getPostSuccess = createAction('[Post] Get Post Success');

export const getPostFailure = createAction(
  '[Post] Get Post Failure',
  props<{ error: string }>(),
);
