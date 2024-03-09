import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthState } from '../ngrx/auth/auth.state';

@Injectable({
  providedIn: 'root',
})
export class PermissionsService implements CanActivate {
  constructor(
    private store: Store<{ auth: AuthState }>,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select('auth').pipe(
      map((auth: AuthState) => {
        // @ts-ignore
        if (auth.role === 'admin' ) {
          return true;
        } else {
          // Redirect to login page for non-admin users
          return this.router.parseUrl('/login');
        }
      }),
      catchError(() => {
        // Redirect to login page for any errors
        return of(this.router.parseUrl('/login'));
      })
    );
  }
}

// RoleGuard function as a proper guard
export function RoleGuard(
  permissionsService: PermissionsService,
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  return permissionsService.canActivate(route, state);
}
