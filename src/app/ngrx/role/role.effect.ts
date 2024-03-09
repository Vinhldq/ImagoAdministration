import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {RoleService} from "../../service/role/role.service";
import {catchError, map, of, switchMap} from "rxjs";
import * as RoleActions from "../../ngrx/role/role.action";

@Injectable()
export class RoleEffect {
  constructor(private actions: Actions, private roleService: RoleService) {
  }

  $getAllRole = createEffect(() => this.actions.pipe(
    ofType(RoleActions.getAllRole),
    switchMap((action) => {
      return this.roleService.getAllRole(action.token, action.page).pipe(
        map((roles: any) => RoleActions.getAllRoleSuccess({roleList: roles})),
        catchError((error) => {
            return of(RoleActions.getAllRoleFailure({error}));
          }
        ));
    })
  ));

  $getAllSearchRole = createEffect(() => this.actions.pipe(
    ofType(RoleActions.getAllSearchRole),
    switchMap((action) => {
      return this.roleService.getAllSearchRole(action.token, action.page).pipe(
        map((roles: any) => RoleActions.getAllSearchRoleSuccess({roles})),
        catchError((error) => [RoleActions.getAllSearchRoleFailure({error})])
      );
    })
  ));

  $createRole = createEffect(() => this.actions.pipe(
    ofType(RoleActions.createRole),
    switchMap((action) => {
      return this.roleService.createRole(action.role).pipe(
        map((role: any) => RoleActions.createRoleSuccess({roles: role})),
        catchError((error) => [RoleActions.createRoleFailure({error})])
      );
    })
  ));

  $updateRole = createEffect(() => this.actions.pipe(
    ofType(RoleActions.updateRole),
    switchMap((action) => {
      return this.roleService.updateRole(action.role.id, action.role).pipe(
        map((role: any) => RoleActions.updateRoleSuccess({roles: role})),
        catchError((error) => [RoleActions.updateRoleFailure({error})])
      );
    })
  ));

  $deleteRole = createEffect(() => this.actions.pipe(
    ofType(RoleActions.deleteRole),
    switchMap((action) => {
      return this.roleService.deleteRole(action.id).pipe(
        map((id: any) => RoleActions.deleteRoleSuccess({id})),
        catchError((error) => [RoleActions.deleteRoleFailure({error})])
      );
    })
  ));
}
