import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-management',
  standalone: true,
  imports: [SharedModule, PostComponent, UserComponent],
  templateUrl: './report-management.component.html',
  styleUrl: './report-management.component.scss',
})
export class ReportManagementComponent implements OnInit {
  @Input() skeleton = false;
  @Input() followFocus = true;
  @Input() cacheActive = false;
  @Input() isNavigation = true;
  @Input() type = 'line';

  tabIndex = 0;

  types = [
    {
      name: 'User',
      route: 'user',
    },
    {
      name: 'Post',
      route: 'post',
    },
  ];

  constructor(private router: Router) {}

  navigateTo(route: string, tabIndex: number) {
    this.tabIndex = tabIndex;
    this.router.navigate(['dashboard/report/', route]);
  }

  ngOnInit(): void {
    let name = this.router.url.split('/').pop();
    let index = this.types.findIndex((item) => item.route === name);
    this.navigateTo(name, index);
  }
}
