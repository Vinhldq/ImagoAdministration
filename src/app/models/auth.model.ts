export interface AuthModel {
  id: string;
  email: string;
  role: string;
  status: string;
  createdAt: AuthDate;
}

export interface AuthDate {
  _seconds: number;
  _nanoseconds: number;
}
