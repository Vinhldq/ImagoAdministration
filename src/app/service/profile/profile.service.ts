import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ProfileModel } from '../../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}


  getMineProfile(idToken: string) {
    return this.httpClient.get<ProfileModel>(
      environment.local_url + `profile/mine`,
      {
        headers: new HttpHeaders({
          Authorization: ` ${idToken}`,
        }),
      },
    );
  }

  getProfileById(token: string, id: string) {
    return this.httpClient.get<ProfileModel>(
      environment.local_url + `profile?id=${id}`,
      {
        headers: new HttpHeaders({
          Authorization: ` ${token}`,
        }),
      },
    );
  }
  getAllAuthProfile(idToken: string, page: number, size: number) {
    return this.httpClient.get<any>(
      environment.local_url + `profile/adminuser?page=${page}&size=${size}`,
      {
        headers: new HttpHeaders({
          Authorization: ` ${idToken}`,
        })
      }
    );
  }

  getAllAuthNoProfile(idToken: string, page: number, size: number) {
    return this.httpClient.get<any>(
      environment.local_url + `profile/adminuser/noprofile?page=${page}&size=${size}`,
      {
        headers: new HttpHeaders({
          Authorization: ` ${idToken}`,
        })
      }
    );
  }
}
