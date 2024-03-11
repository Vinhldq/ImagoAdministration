import { AllReportModel, ReportModel } from '../../models/report.model';

export interface ReportState {
  reportList: AllReportModel;
  isGetAllReport: boolean;
  isGetAllReportSuccess: boolean;
  getAllReportErrorMessage: string;

  allReport: ReportModel[];
  isAllReport: boolean;
  isAllReportSuccess: boolean;
  allReportErrorMessage: string;
}
