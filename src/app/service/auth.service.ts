import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';
import { from } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthModel} from "../models/auth.model";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private auth: Auth, private httpClient: HttpClient) {}

  loginWithGoogle() {
    return from(
      new Promise<string>(async (resolve, reject) => {
        try {
          let creadential = await signInWithPopup(
            this.auth,
            new GoogleAuthProvider()
          );
          let idToken = await creadential.user.getIdToken();
          resolve(idToken);
          console.log(idToken);
          let listAuth = await this.getAuth(idToken).toPromise();
          let id = creadential.user.uid;
          for (let i = 0; i < listAuth.length; i++) {
            if (listAuth[i].id === id 
              && listAuth[i].email === creadential.user.email
              ) {
              console.log('da ton tai')
              await this.signIn(
                idToken,
              ).toPromise();
            }
            else {
              console.log('chua ton tai');
              await this.createAuth(idToken).toPromise();
            }
            
          }  
        } catch {
          reject('Cannot login with Google');
        }
      })
    );
  }
  signinWithGoogle() {
    return from(
      new Promise<string>(async (resolve, reject) => {
        try {
          let creadential = await signInWithPopup(
            this.auth,
            new GoogleAuthProvider()
          );
          let idToken = await creadential.user.getIdToken();
          resolve(idToken);
          let res = await this.getAuthById(idToken, creadential.user.uid).toPromise();
          return reject(res);
        } catch {
          reject('Cannot login with Google');
        }
      })
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
          reject('Cannot login with Google');
        }
      })
    );
  }
  createAuth(idToken: string) {
    return this.httpClient.post<any>(
      environment.local_url + `auth/signup`,{},
      {
        headers : new HttpHeaders({
          Authorization:` ${idToken}`,
        })
      }
    );
  }

  getAuthById(idToken: string, id: string) {
    return this.httpClient.get<AuthModel>(
      environment.local_url + `auth/getId?id=${id}`,
      {
        headers : new HttpHeaders({
          Authorization:` ${idToken}`,
        })
      }
    );
  }

  signIn(idToken: string){
    return this.httpClient.post<AuthModel>(
      environment.local_url + `auth/signin`,
      {
        headers : new HttpHeaders({
          Authorization:` ${idToken}`,
        })
      }
    );
  }
  getAuth(idToken: string){
    return this.httpClient.get<AuthModel[]>(
      environment.local_url + `auth/list`,
      {
        headers : new HttpHeaders({
          Authorization:` ${idToken}`,
        })
      }
    );
  }
}
