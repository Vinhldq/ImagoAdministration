
import { AllReportModel, ReportModel,ReportPagination } from '../../models/report.model';

export interface ReportState {
  reportList: AllReportModel;
  isGetAllReport: boolean;
  isGetAllReportSuccess: boolean;
  getAllReportErrorMessage: string;
  reportListPagination: ReportPagination;

  allReport: ReportModel[];
  isAllReport: boolean;
  isAllReportSuccess: boolean;
  allReportErrorMessage: string;
}
