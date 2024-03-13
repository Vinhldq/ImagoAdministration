import {Route} from "@angular/router";
import {ReportManagementComponent} from "../report-management/report-management.component";
import {UserComponent} from "../report-management/components/user/user.component";
import {PostComponent} from "../report-management/components/post/post.component";
import {UserManagementComponent} from "./user-management.component";
import {AuthnoprofileComponent} from "./components/authnoprofile/authnoprofile.component";
import {ProfileComponent} from "./components/profile/profile.component";

export const USER_MANAGEMENT: Route[] = [
  {
    path: '',
    component: UserManagementComponent,
    children: [
      {
        path: 'auth',
        component: AuthnoprofileComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
      },
    ],
  },
];
