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

  // check post.creatorId === profile.uid => using mergeMap to getPostDetail
  getPostDetail$ = createEffect(() =>
    this.action$.pipe(
      ofType(PostActions.getPostDetail),
      mergeMap((action) => {
        return this.postService.getPostDetail(action.token, action.id).pipe(
          map((detailProfile: any) => {
            return PostActions.getPostDetailSuccess({
              ...detailProfile,
              detailProfile: [detailProfile],
            });
          }),
          catchError((error) => {
            return of(
              PostActions.getPostDetailFailure({
                errorMessage: error,
              })
            );
          })
        );
      })
    )
  );

  updatePost$ = createEffect(() =>
    this.action$.pipe(
      ofType(PostActions.updatePost),
      switchMap((action) => {
        return this.postService
          .updatePost(action.token, action.post, action.id)
          .pipe(
            map((updatePost: any) => {
              return PostActions.updatePostSuccess({
                updatePost: updatePost,
              });
            }),
            catchError((error) => {
              return of(
                PostActions.updatePostFailure({
                  errorMessage: error,
                })
              );
            })
          );
      })
    )
  );

  //clear update post just reset cateId to empty array. using API updatePost
  //getCommentByPostId
  getCommentByPostId$ = createEffect(() =>
    this.action$.pipe(
      ofType(PostActions.getCommentByPostId),
      switchMap((action) => {
        return this.postService
          .getCommentByPostId(action.token, action.postId, action.page)
          .pipe(
            map((getCommentByPostId: any) => {
              return PostActions.getCommentByPostIdSuccess({
                getCommentByPostId: getCommentByPostId,
              });
            }),
            catchError((error) => {
              return of(
                PostActions.getCommentByPostIdFailure({
                  errorMessage: error,
                })
              );
            })
          );
      })
    )
  );
}
