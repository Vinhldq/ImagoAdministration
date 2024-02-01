import { Route } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UserManagementComponent } from './tabs/user-management/user-management.component';
import { RoleManagementComponent } from './tabs/role-management/role-management.component';
import { ReportManagementComponent } from './tabs/report-management/report-management.component';
import { DashboardComponent } from './tabs/dashboard/dashboard.component';
import { PostManagementComponent } from './tabs/post-management/post-management.component';
import { SettingsComponent } from './tabs/settings/settings.component';

export const LAYOUT_ROUTES: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'user',
        component: UserManagementComponent,
      },
      {
        path: 'role',
        component: RoleManagementComponent,
      },
      {
        path: 'report',
        component: ReportManagementComponent,
      },
      {
        path: 'post',
        component: PostManagementComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
];
