import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AuthState } from '../../ngrx/auth/auth.state';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(
    private httpClient: HttpClient,
    private store: Store<{ auth: AuthState }>,
  ) {}

  getAllCategory(token: string, page: number) {
    const headers = { Authorization: `${token}` };
    return this.httpClient.get(
      `http://localhost:3000/v1/category/all?page=${page}`,
      {
        headers: headers,
      },
    );
  }
}
