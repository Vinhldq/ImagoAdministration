import {PostModel} from './post.model';

export interface ProfileModel {
  id: string | PostModel['creatorId'];
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  phone: string;
  photoUrl: string;
  gender: string;
  category: string[];
  followers: string[];
  following: string[];
}

export interface AuthProfilePagination {
  data: any[];
  endPage: number;
}

export interface AuthNoProfilePagination {
  data: any[];
  endPage: number;
}
