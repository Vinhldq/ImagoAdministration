import { AllPostModel, AllPostProfile } from '../../models/post.model';

export interface PostState {
  postList: AllPostModel;
  isGetAllPost: boolean;
  isGetAllPostSuccess: boolean;
  getAllPostErrorMessage: string;

  postCreatorName: AllPostProfile;
}
