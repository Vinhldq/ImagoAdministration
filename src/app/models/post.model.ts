import { ProfileModel } from './profile.model';

export interface PostModel {
  id: string;
  creatorId: string;
  share: string[];
  photoUrl: string[];
  content: string;
  hashtag: string[];
  cateId: string[];
  reaction: string[];
  comments: Comment[];
  mention: string[];
  createdAt: PostDate;
  updatedAt: Date;
  deletedAt: Date;
}

export interface AllPostModel {
  data: PostModel[];
  endPage: number;
}

export interface PostDate {
  _seconds: number;
  _nanoseconds: number;
}
