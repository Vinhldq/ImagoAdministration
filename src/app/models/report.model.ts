import { ProfileModel } from './profile.model';
import { PostModel } from './post.model';

export interface ReportModel {
  type: string;
  reason: string[];
  typeInfo: ProfileModel | PostModel;
  content: string;
  createdAt: ReportDateModel;
  reporter: string;
}

export interface AllReportModel {
  data: ReportModel[];
  endPage: number;
}

export interface ReportDateModel {
  _seconds: number;
  _nanoseconds: number;
}
