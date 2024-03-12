export interface AuthModel {
  id: string;
  email: string;
  role: string;
  isBanned: boolean;
  status: string;
  createdAt: AuthDate;
}

export interface AuthDate {
  _seconds: number;
  _nanoseconds: number;
}
