import { CommentResponse } from '../../models/comment.model';
import { AllPostModel, PostModel } from '../../models/post.model';
import { ProfileModel } from '../../models/profile.model';

export interface PostState {
  postList: AllPostModel;
  detailProfile: ProfileModel[];
  updatePost: PostModel;
  getCommentByPostId: CommentResponse;
  isLoading: boolean;
  isSuccessful: boolean;
  errorMessage: string;
  clearUpdatePost: boolean;
  isGetAllPost: boolean;
  isGetAllPostSuccess: boolean;
  getAllPostErrorMessage: string;
}
