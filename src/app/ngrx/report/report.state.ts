import { ReportModel } from '../../models/report.model';

export interface ReportState {
  reportList: ReportModel[];
  isGetAllReport: boolean;
  isGetAllReportSuccess: boolean;
  getAllReportErrorMessage: string;
}
