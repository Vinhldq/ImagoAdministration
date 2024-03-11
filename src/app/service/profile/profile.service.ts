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
}
