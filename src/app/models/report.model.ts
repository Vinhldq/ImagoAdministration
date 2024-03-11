export interface ReportModel {
  type: string;
  reason: string[];
  status: string;
  id: string;
  typeId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  creatorId: string;
}

export interface ReportPagination {
  data: ReportModel[];
  endPage: number;
}

