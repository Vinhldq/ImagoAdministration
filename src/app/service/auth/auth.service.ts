import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';
import { from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthModel } from '../../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: Auth,
    private httpClient: HttpClient,
  ) {}

  loginWithGoogle() {
    return from(
      new Promise<string>(async (resolve, reject) => {
        try {
          let creadential = await signInWithPopup(
            this.auth,
            new GoogleAuthProvider(),
          );
          let idToken = await creadential.user.getIdToken();
          resolve(idToken);
          await this.signUp(idToken).toPromise();
        } catch {
          reject('Cannot login with Google');
        }
      }),
    );
  }

  logout() {
    return from(
      new Promise<string>(async (resolve, reject) => {
        try {
          signOut(this.auth).then(() => {
            resolve('Logout success!!!');
          });
        } catch {
          reject('Cannot logout with Google');
        }
      }),
    );
  }

  getAuthById(idToken: string, id: string) {
    return this.httpClient.get<AuthModel>(
      environment.local_url + `auth/?id=${id}`,
      {
        headers: new HttpHeaders({
          Authorization: ` ${idToken}`,
        }),
      },
    );
  }

  signUp(idToken: string) {
    return this.httpClient.post<AuthModel>(
      environment.local_url + `auth`,
      {},
      {
        headers: new HttpHeaders({
          Authorization: ` ${idToken}`,
        }),
      },
    );
  }

  getAllAuth(idToken: string) {
    return this.httpClient.get<AuthModel[]>(
      environment.local_url + `auth/list`,
      {
        headers: new HttpHeaders({
          Authorization: ` ${idToken}`,
        }),
      },
    );
  }
  changeRole(idToken: string, id: string, role: string) {
    return this.httpClient.put<AuthModel>(
      environment.local_url + `auth/role?id=${id}&role=${role}`, {},
      {
        headers: new HttpHeaders({
          Authorization: ` ${idToken}`,
        }),
      },
    );
  }

  changeBlock(idToken: string, id: string, isBanned: boolean) {
    return this.httpClient.put<AuthModel>(
      environment.local_url + `auth/block?id=${id}`, {
        isBanned: isBanned,
      },
      {
        headers: new HttpHeaders({
          Authorization: ` ${idToken}`,
        }),
      },
    );
  }

  changeUnBlock(idToken: string, id: string, isBanned: boolean) {
    return this.httpClient.put<AuthModel>(
      environment.local_url + `auth/unblock?id=${id}`, {
        isBanned: isBanned,
      },
      {
        headers: new HttpHeaders({
          Authorization: ` ${idToken}`,
        }),
      },
    );
  }
}
