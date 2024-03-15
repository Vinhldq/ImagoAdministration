import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AuthState } from '../../ngrx/auth/auth.state';
import { idToken } from '@angular/fire/auth';
import { environment } from '../../../environments/environment';
import { ProfileModel } from '../../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(
    private httpClient: HttpClient,
    private store: Store<{ auth: AuthState }>
  ) {}

  getAllPost(token: string, page: number, size: number) {
    const headers = { Authorization: `${token}` };
    return this.httpClient.get(
      `http://localhost:3000/v1/post/all?page=${page}&size=${size}`,
      {
        headers: headers,
      }
    );
  }

  getPostDetail(token: string, id: string) {
    return this.httpClient.get<ProfileModel>(
      environment.local_url + `profile?id=${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `${token}`,
        }),
      }
    );
  }

  updatePost(token: string, post: any, id: string) {
    return this.httpClient.put(
      environment.local_url + `post/updatebyadmin?id=${id}`,
      post,
      {
        headers: new HttpHeaders({
          Authorization: `${token}`,
        }),
      }
    );
  }

  getCommentByPostId(token: string, postId: string, page: number) {
    return this.httpClient.get(
      environment.local_url + `comment/post?postId=${postId}&page=${page}`,
      {
        headers: new HttpHeaders({
          Authorization: `${token}`,
        }),
      }
    );
  }
}
