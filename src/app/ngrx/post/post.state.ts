import { AllPostModel } from '../../models/post.model';
import { ProfileModel } from '../../models/profile.model';

export interface PostState {
  postList: AllPostModel;
  detailProfile: ProfileModel[];
  isGetAllPost: boolean;
  isGetAllPostSuccess: boolean;
  getAllPostErrorMessage: string;
}
