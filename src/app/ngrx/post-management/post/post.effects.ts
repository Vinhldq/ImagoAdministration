import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from '../../../service/post/post.service';
import * as PostActions from './post.action';
import { getALlPost } from './post.action';
import { switchMap } from 'rxjs';

@Injectable()
export class PostEffects {
  constructor(
    private $action: Actions,
    private postService: PostService,
  ) {}

  $getAllPost = createEffect(() =>
    this.$action.pipe(
      ofType(PostActions.getALlPost),
      // switchMap((action) => {}),
    ),
  );
}
