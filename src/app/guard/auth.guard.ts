// import { Injectable, inject } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivateFn,
//   Router,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { Observable, catchError, map, of } from 'rxjs';
// import { AuthState } from '../ngrx/auth/auth.state';
//
// @Injectable({
//   providedIn: 'root',
// })
// export class PermissionsService {
//   constructor(
//     private store: Store<{ auth: AuthState }>,
//     private router: Router
//   ) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     return this.store.select('auth', 'auth').pipe(
//       map((auth) => {
//         if (auth.id != '' && auth.id != undefined && auth.id != null) {
//           return true;
//         } else {
//           this.router.navigateByUrl('/welcome');
//           return false;
//         }
//       }),
//       catchError(() => {
//         this.router.navigateByUrl('/welcome');
//         return of(false);
//       })
//     );
//   }
// }
//
// export const AuthGuard: CanActivateFn = (
//   next: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ):
//   | Observable<boolean | UrlTree>
//   | Promise<boolean | UrlTree>
//   | boolean
//   | UrlTree => {
//   return inject(PermissionsService).canActivate(next, state);
// };
