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
  on(RoleActions.getAllRoleSuccess, (state, {roles}) => {
      return {
        ...state,
        loading: false,
        role: roles,
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
  on(RoleActions.getAllSearchRole, (state) => {
      return {
        ...state,
        loading: true
      }
    }
  ),
  on(RoleActions.getAllSearchRoleSuccess, (state, {roles}) => {
      return {
        ...state,
        loading: false,
        role: roles,
        error: ''
      }
    }
  ),
  on(RoleActions.getAllSearchRoleFailure, (state, {error}) => {
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
  on(RoleActions.createRoleSuccess, (state, {roles}) => {
      return {
        ...state,
        loading: false,
        role: [...state.roles, roles],
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
  on(RoleActions.updateRoleSuccess, (state, {roles}) => {
      return {
        ...state,
        loading: false,
        role: state.roles.map(item => item.data.find(item => item.id === roles.id) ? roles : item),
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
        roles: state.roles.filter(item => item.data.find(item => item.id !== id)),
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
