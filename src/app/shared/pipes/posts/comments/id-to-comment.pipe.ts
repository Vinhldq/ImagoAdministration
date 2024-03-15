import { Pipe, PipeTransform } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from '../../../../service/auth/auth.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../../ngrx/auth/auth.state';
import { PostService } from '../../../../service/post/post.service';
import { CommentModel } from '../../../../models/comment.model';

@Pipe({
  name: 'idToComment',
  standalone: true,
})
export class CommentPipe implements PipeTransform {
  token = '';
  constructor(
    private postService: PostService,
    private auth: AuthService,
    private store: Store<{
      auth: AuthState;
    }>
  ) {}

  transform(value: string): Observable<string> {
    this.store.select('auth', 'idToken').subscribe((value) => {
      if (value != null) {
        this.token = value;
      }
    });
    return this.postService.getCommentByPostId(this.token, value, 1).pipe(
      map((comment: CommentModel) => {
        return comment.content;
      })
    );
  }
}
