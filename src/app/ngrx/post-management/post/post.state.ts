export interface PostDetails {
  id: string;
  title: string;
  body: string;
}

export interface PostState {
  post: PostDetails[];
  isLoading: boolean;
  error: string;
}
