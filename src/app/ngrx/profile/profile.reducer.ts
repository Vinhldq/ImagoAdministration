import { createReducer, on } from '@ngrx/store';
import { ProfileModel } from '../../models/profile.model';
import { ProfileState } from './profile.state';
import * as ProfileAction from './profile.action';

export const initialState: ProfileState = {
  profile: <ProfileModel>{},

  isLoading: false,
  isSuccessful: false,
  errorMess: '',
  isGetLoading: false,
  isGetSuccessful: false,
  getErrorMess: '',

  profileById: <ProfileModel>{},
  isGetByIdLoading: false,
  isGetByIdSuccessful: false,
  getByIdErrorMess: '',
};
export const profileReducer = createReducer(
  initialState,
  on(ProfileAction.getMineProfile, (state, type) => {
    console.log(type);
    return {
      ...state,
      isGetLoading: true,
      isGetSuccessful: false,
      getErrorMess: '',
    };
  }),
  on(ProfileAction.getMineProfileSuccess, (state, { profile, type }) => {
    console.log(type);
    return {
      ...state,
      profile: profile,
      isGetLoading: false,
      isGetSuccessful: true,
      getErrorMess: '',
    };
  }),
  on(ProfileAction.getMineProfileFailure, (state, { error, type }) => {
    console.log(type);
    return {
      ...state,
      isGetLoading: false,
      isGetSuccessful: false,
      getErrorMess: error,
    };
  }),

  on(ProfileAction.getProfileById, (state, { type }) => {
    return {
      ...state,
      isGetByIdLoading: true,
    };
  }),
  on(ProfileAction.getProfileByIdSuccess, (state, { profile, type }) => {
    return {
      ...state,
      profileById: profile,
      isGetByIdLoading: false,
      isGetByIdSuccessful: true,
    };
  }),
  on(ProfileAction.getProfileByIdFailure, (state, { errorMessage, type }) => {
    return {
      ...state,
      isGetByIdLoading: false,
      isGetByIdSuccessful: false,
      getByIdErrorMess: errorMessage,
    };
  }),
  on(ProfileAction.clearState, (state, action) => {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      errorMessage: '',
      isGetLoading: false,
      isGetSuccess: false,
      getErrorMessage: '',
      isUpdating: false,
      isUpdateSuccess: false,
      updateErrorMessage: '',
    };
  }),
);
