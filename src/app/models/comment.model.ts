export interface CommentModel {
  authorId: string;
  content: string;
  createdAt: Date;
  id: string;
  postId: string;
}

export interface CommentResponse {
  data: CommentModel[];
  endPage: number;
}
