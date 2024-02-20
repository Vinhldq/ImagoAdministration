import { Route } from '@angular/router';
import { DashboardDetailComponent } from './dashboard-detail.component';
import { PostChartComponent } from '../post-chart/post-chart.component';
import { UserChartComponent } from '../user-chart/user-chart.component';
import { ReportedPostChartComponent } from '../reported-post-chart/reported-post-chart.component';
import { CategoryChartComponent } from '../category-chart/category-chart.component';
import { UniqueVisitorChartComponent } from '../unique-visitor-chart/unique-visitor-chart.component';

export const DASHBOARD_DETAIL_ROUTES: Route[] = [
  {
    path: '',
    component: DashboardDetailComponent,
    children: [
      {
        path: 'post',
        component: PostChartComponent,
      },
      {
        path: 'user',
        component: UserChartComponent,
      },
      {
        path: 'reportedPost',
        component: ReportedPostChartComponent,
      },
      {
        path: 'category',
        component: CategoryChartComponent,
      },
      {
        path: 'uniqueVisitor',
        component: UniqueVisitorChartComponent,
      },
    ],
  },
];
