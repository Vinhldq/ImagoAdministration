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
}
