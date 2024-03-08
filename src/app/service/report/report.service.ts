import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AuthState } from '../../ngrx/auth/auth.state';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(
    private httpClient: HttpClient,
    private store: Store<{ auth: AuthState }>,
  ) {}

  getAllReport(token: string) {
    const headers = { Authorization: `${token}` };
    return this.httpClient.get('http://localhost:3000/v1/report', {
      headers: headers,
    });
  }
}
