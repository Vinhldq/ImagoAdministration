import { AllPostModel, PostModel } from '../../models/post.model';
import { ProfileModel } from '../../models/profile.model';

export interface PostState {
  postList: AllPostModel;
  detailProfile: ProfileModel[];
  updatePost: PostModel;
  isGetAllPost: boolean;
  isGetAllPostSuccess: boolean;
  getAllPostErrorMessage: string;
}
