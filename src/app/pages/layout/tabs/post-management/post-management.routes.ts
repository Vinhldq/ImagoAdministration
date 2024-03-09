import { CategoryComponent } from './components/category/category.component';
import { PostComponent } from './components/post/post.component';
import { PostManagementComponent } from './post-management.component';
import { Route } from '@angular/router';

export const POST_MANAGEMENT: Route[] = [
  {
    path: '',
    component: PostManagementComponent,
    children: [
      {
        path: 'post',
        component: PostComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: '',
        redirectTo: 'post',
        pathMatch: 'full',
      },
    ],
  },
];
