import * as RoleActions from '../../ngrx/role/role.action';
import {RoleState} from "./role.state";
import {createReducer, on} from "@ngrx/store";

export const initialState: RoleState = {
  roles: [],
  loading: false,
  error: ''
}

export const roleReducer = createReducer(
  initialState,
  on(RoleActions.getAllRole, (state) => {
      return {
        ...state,
        loading: true
      }
    }
  ),
  on(RoleActions.getAllRoleSuccess, (state, {role}) => {
      return {
        ...state,
        loading: false,
        roles: role,
        error: ''
      }
    }
  ),
  on(RoleActions.getAllRoleFailure, (state, {error}) => {
      return {
        ...state,
        loading: false,
        error: error
      }
    }
  ),
  on(RoleActions.createRole, (state) => {
      return {
        ...state,
        loading: true
      }
    }
  ),
  on(RoleActions.createRoleSuccess, (state, {role}) => {
      return {
        ...state,
        loading: false,
        roles: [...state.roles, role],
        error: ''
      }
    }
  ),
  on(RoleActions.createRoleFailure, (state, {error}) => {
      return {
        ...state,
        loading: false,
        error: error
      }
    }
  ),
  on(RoleActions.updateRole, (state) => {
      return {
        ...state,
        loading: true
      }
    }
  ),
  on(RoleActions.updateRoleSuccess, (state, {role}) => {
      return {
        ...state,
        loading: false,
        roles: state.roles.map(item => item.id === role.id ? role : item),
        error: ''
      }
    }
  ),
  on(RoleActions.updateRoleFailure, (state, {error}) => {
      return {
        ...state,
        loading: false,
        error: error
      }
    }
  ),
  on(RoleActions.deleteRole, (state) => {
      return {
        ...state,
        loading: true
      }
    }
  ),
  on(RoleActions.deleteRoleSuccess, (state, {id}) => {
      return {
        ...state,
        loading: false,
        roles: state.roles.filter(item => item.id !== id),
        error: ''
      }
    }
  ),
  on(RoleActions.deleteRoleFailure, (state, {error}) => {
      return {
        ...state,
        loading: false,
        error: error
      }
    }
  )
);
