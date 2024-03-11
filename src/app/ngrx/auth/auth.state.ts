import { AuthModel } from '../../models/auth.model';

export interface AuthState {
  idToken: string;
  isLoading: boolean;
  isSuccessful: boolean;
  errorMessage: string;
  uid: string;
  isLogoutSuccess: boolean;
  logoutErrorMessage: string;
  authDetail: AuthModel;
  isGetSuccess: boolean;

  getAllAuth: AuthModel[];
  isGetAllSuccess: boolean;
  getAllErrorMessage: string;
}
