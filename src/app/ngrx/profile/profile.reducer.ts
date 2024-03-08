import {createReducer, on} from "@ngrx/store";
import {ProfileModel} from "../../models/profile.model";
import {ProfileState} from "./profile.state";
import * as ProfileAction from './profile.action';
export const initialState : ProfileState= {
  profile:<ProfileModel>{},

  isLoading: false,
  isSuccessful: false,
  errorMess: '',
  isGetLoading: false,
  isGetSuccessful: false,
  getErrorMess: '',
}
export const profileReducer = createReducer(
  initialState,
  on(ProfileAction.getMineProfile, (state) => {
    return {
      ...state,
      isGetLoading: true,
      isGetSuccessful: false,
      getErrorMess: '',

    }
  }),
  on(ProfileAction.getMineProfileSuccess, (state, {profile}) => {
    return {
      ...state,
      profile: profile,
      isGetLoading: false,
      isGetSuccessful: true,
      getErrorMess: '',

    }
  }),
  on(ProfileAction.getMineProfileFailure, (state, {error}) => {
    return {
      ...state,
      isGetLoading: false,
      isGetSuccessful: false,
      getErrorMess: error,
    }
  }),
)
