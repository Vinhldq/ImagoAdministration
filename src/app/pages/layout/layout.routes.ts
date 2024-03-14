import {Route} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {UserManagementComponent} from './tabs/user-management/user-management.component';
import {RoleManagementComponent} from './tabs/role-management/role-management.component';
import {ReportManagementComponent} from './tabs/report-management/report-management.component';
import {DashboardComponent} from './tabs/dashboard/dashboard.component';
import {PostManagementComponent} from './tabs/post-management/post-management.component';
import {SettingsComponent} from './tabs/settings/settings.component';

export const LAYOUT_ROUTES: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./tabs/dashboard/dashboard.routes').then(
            (mod) => mod.DASHBOARD_ROUTES,
          ),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./tabs/user-management/user-management.routes').then(
            (mod) => mod.USER_MANAGEMENT,
          ),
      },
      {
        path: 'role',
        component: RoleManagementComponent,
      },
      {
        path: 'report',
        loadChildren: () =>
          import('./tabs/report-management/report-management.routes').then(
            (mod) => mod.REPORT_MANAGEMENT,
          ),
      },
      {
        path: 'post',
        loadChildren: () =>
          import('./tabs/post-management/post-management.routes').then(
            (mod) => mod.POST_MANAGEMENT,
          ),
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
];
