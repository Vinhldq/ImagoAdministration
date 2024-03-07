export interface PostManagementDetails {
  id: string;
  title: string;
  body: string;
}

export interface PostManagementState {
  post: PostManagementDetails[];
  isLoading: boolean;
  error: string;
}
