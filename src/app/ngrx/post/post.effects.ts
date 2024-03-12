import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { PostService } from '../../service/post/post.service';
import * as PostActions from './post.actions';
import { PostModel } from '../../models/post.model';

@Injectable()
export class PostEffects {
  constructor(private action$: Actions, private postService: PostService) {}

  getAllPost$ = createEffect(() =>
    this.action$.pipe(
      ofType(PostActions.getAllPosts),
      switchMap((action) => {
        return this.postService
          .getAllPost(action.token, action.page, action.size)
          .pipe(
            map((postList: any) => {
              return PostActions.getAllPostsSuccess({
                postList: postList,
              });
            }),
            catchError((error) => {
              return of(
                PostActions.getAllPostsFailure({
                  errorMessage: error,
                })
              );
            })
          );
      })
    )
  );

  getCreatorName$ = createEffect(() =>
    this.action$.pipe(
      ofType(PostActions.getCreatorName),
      switchMap((action) => {
        return this.postService
          .getCreatorName(action.token, action.page, action.size)
          .pipe(
            map((postCreatorName: any) => {
              console.log(postCreatorName);
              return PostActions.getCreatorNameSuccess({
                postCreatorName: postCreatorName,
              });
            }),
            catchError((error) => {
              return of(
                PostActions.getCreatorNameFailure({
                  errorMessage: error,
                })
              );
            })
          );
      })
    )
  );
}
