import * as RoleActions from './role.actions';
import {RoleState} from './role.state';
import {createReducer, on} from '@ngrx/store';

export const initialState: RoleState = {
  roleList: {
    data: [],
    endPage: 0,
  },
  adminRoleList: {
    data: [],
    endPage: 0,
  },
  isLoading: false,
  isSuccessful: false,
  errorMessage: '',
  isGetAllRole: false,
  isGetAllRoleSuccess: false,
  getAllRoleErrorMessage: '',
};

export const roleReducer = createReducer(
  initialState,
  on(RoleActions.getAllRole, (state, {type}) => {
      return {
        ...state,
        isLoading: true,
        isSuccessful: false,
        isGetAllRole: true,
        isGetAllRoleSuccess: false,
      }
    }
  ),
  on(RoleActions.getAllRoleSuccess, (state, {type, roleList}) => {
    return {
      ...state,
      isGetAllReport: false,
      isGetAllReportSuccess: true,
      roleList: roleList,
      isSuccessful: true,
      isLoading: false,
      errorMessage: ''
    };
  }),
  on(RoleActions.getAllRoleFailure, (state, {error, type}) => {
      return {
        ...state,
        isLoading: false,
        isSuccessful: false,
        errorMessage: error,
        isGetAllReport: false,
        isGetAllReportSuccess: false,
        getAllReportErrorMessage: error,
      };
    }
  ),
  on(RoleActions.getListAdminRole, (state) => {
      return {
        ...state,
        isLoading: true,
        isSuccessful: false,
      }
    }
  ),
  on(RoleActions.getListAdminRoleSuccess, (state, {roleList}) => {
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        adminRoleList: roleList,
        errorMessage: ''
      }
    }
  ),
  on(RoleActions.getListAdminRoleFailure, (state, {error}) => {
      return {
        ...state,
        isLoading: false,
        isSuccessful: false,
        errorMessage: error
      }
    }
  ),
  on(RoleActions.createRole, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(RoleActions.createRoleSuccess, (state, {roles}) => {
    return {
      ...state,
      loading: false,
      role: [...state.roleList.data, roles],
      error: '',
    };
  }),
  on(RoleActions.createRoleFailure, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error: error,
    };
  }),
  on(RoleActions.updateRole, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(RoleActions.updateRoleSuccess, (state, {roles}) => {
    return {
      ...state,
      loading: false,
      role: state.roleList.data.map((item) =>
        item.id === roles.id ? roles : item
      ),
      error: '',
    };
  }),
  on(RoleActions.updateRoleFailure, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error: error,
    };
  }),
  on(RoleActions.deleteRole, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(RoleActions.deleteRoleSuccess, (state, {id}) => {
    return {
      ...state,
      loading: false,
      roles: state.roleList.data.filter((item) => item.id !== id),
      error: '',
    };
  }),
  on(RoleActions.deleteRoleFailure, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error: error,
    };
  })
);
