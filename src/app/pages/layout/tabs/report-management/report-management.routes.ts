import { Route } from '@angular/router';
import { ReportManagementComponent } from './report-management.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';

export const REPORT_MANAGEMENT: Route[] = [
  {
    path: '',
    component: ReportManagementComponent,
    children: [
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'post',
        component: PostComponent,
      },
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full',
      },
    ],
  },
];
