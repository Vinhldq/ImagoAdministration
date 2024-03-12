import { PostModel } from './post.model';
export interface ProfileModel {
  id: string;
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
