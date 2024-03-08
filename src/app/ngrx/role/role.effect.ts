import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {RoleService} from "../../service/role/role.service";
import {catchError, map, switchMap} from "rxjs";
import * as RoleActions from "../../ngrx/role/role.action";

@Injectable()
export class RoleEffect {
  constructor(private actions: Actions, private roleService: RoleService) {
  }

  $getAllRole = createEffect(() => this.actions.pipe(
    ofType(RoleActions.getAllRole),
    switchMap((action) => this.roleService.getAllRole(action.token,action.page).pipe(
      map((roles: any) => RoleActions.getAllRoleSuccess({roles})),
      catchError((error) => [RoleActions.getAllRoleFailure({error})])
    ))
  ));

  $getAllSearchRole = createEffect(() => this.actions.pipe(
    ofType(RoleActions.getAllSearchRole),
    switchMap((action) => this.roleService.getAllSearchRole(action.token,action.page).pipe(
      map((roles: any) => RoleActions.getAllSearchRoleSuccess({roles})),
      catchError((error) => [RoleActions.getAllSearchRoleFailure({error})])
    ))
  ));

  $createRole = createEffect(() => this.actions.pipe(
    ofType(RoleActions.createRole),
    switchMap((action) => this.roleService.createRole(action.role).pipe(
      map((role: any) => RoleActions.createRoleSuccess({roles: role})),
      catchError((error) => [RoleActions.createRoleFailure({error})])
    ))
  ));

  $updateRole = createEffect(() => this.actions.pipe(
    ofType(RoleActions.updateRole),
    switchMap((action) => this.roleService.updateRole(action.role.id, action.role).pipe(
      map((role: any) => RoleActions.updateRoleSuccess({roles: role})),
      catchError((error) => [RoleActions.updateRoleFailure({error})])
    ))
  ));

  $deleteRole = createEffect(() => this.actions.pipe(
    ofType(RoleActions.deleteRole),
    switchMap((action) => this.roleService.deleteRole(action.id).pipe(
      map((role: any) => RoleActions.deleteRoleSuccess({id: role.id})),
      catchError((error) => [RoleActions.deleteRoleFailure({error})])
    ))
  ));
}
