import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AuthState } from '../../ngrx/auth/auth.state';
import { ReportPagination } from '../../models/report.model';
import { ReportModel } from '../../models/report.model';
import { environment } from '../../../environments/environment';

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
    return this.httpClient.get<ReportModel>(environment.local_url + `report/`, {
      headers,
    });
  }

  getReportStatusCompleted(token: string, page: number) {
    const headers = { Authorization: `${token}` };
    return this.httpClient.get<ReportPagination>(
      `http://localhost:3000/v1/report/completed?page=${page}`,
      {
        headers: headers,
      },
    );
  }
  getAllReportStatusPending(token: string, page: number, type: string) {
    const headers = { Authorization: `${token}` };
    return this.httpClient.get<ReportModel>(
      environment.local_url + `report/pending?page=${page}&type=${type}`,
      { headers },
    );
  }
}
