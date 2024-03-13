import {AuthNoProfilePagination, AuthProfilePagination, ProfileModel} from '../../models/profile.model';

export interface ProfileState {
  profile: ProfileModel;
  authProfile: AuthProfilePagination;
  authNoProfile: AuthNoProfilePagination;
  isLoading: boolean;
  isSuccessful: boolean;
  errorMess: string;
  isGetLoading: boolean;
  isGetSuccessful: boolean;
  getErrorMess: string;
  profileById: ProfileModel;
  isGetByIdLoading: boolean;
  isGetByIdSuccessful: boolean;
  getByIdErrorMess: string;
}
