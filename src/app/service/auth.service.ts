<<<<<<< HEAD
import {Injectable} from '@angular/core';
import {Auth, getAuth, signInWithPopup, signOut} from "@angular/fire/auth";
import {GoogleAuthProvider} from "firebase/auth";
=======
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
>>>>>>> eefc7034a574266390ea376a0bf623687490f0a4

@Injectable({
  providedIn: 'root',
})
export class AuthService {

<<<<<<< HEAD
  constructor(public auth: Auth) {
  }

  signWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        console.log(user)
        // ...
      }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }


  signOut() {
    signOut(this.auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
=======
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
          let auth = await this.signUp(idToken).toPromise();
          console.log(auth);
          // let listAuth = await this.getAuth(idToken).toPromise();
          // let id = creadential.user.uid;
          // for (let i = 0; i < listAuth.length; i++) {
          //   if (listAuth[i].id === id
          //     && listAuth[i].email === creadential.user.email
          //     ) {
          //     console.log('da ton tai')
          //     await this.signIn(
          //       idToken,
          //     ).toPromise();
          //   }
          //   else {
          //     console.log('chua ton tai');
          //     await this.createAuth(idToken).toPromise();
          //   }
          //
          // }
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
  getAuthById(idToken: string, id: string) {
    return this.httpClient.get<AuthModel>(
      environment.local_url + `auth/?id=${id}`,
      {
        headers : new HttpHeaders({
          Authorization:` ${idToken}`,
        })
      }
    );
>>>>>>> eefc7034a574266390ea376a0bf623687490f0a4
  }

  signUp(idToken: string){
    console.log(idToken);
    return this.httpClient.post<AuthModel>(
      environment.local_url + `auth`,{},
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
