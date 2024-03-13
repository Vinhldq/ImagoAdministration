import { Component, OnInit } from '@angular/core';
import { CategoryChartComponent } from '../category-chart/category-chart.component';
import { PostChartComponent } from '../post-chart/post-chart.component';
import { ReportedPostChartComponent } from '../reported-post-chart/reported-post-chart.component';
import { UniqueVisitorChartComponent } from '../unique-visitor-chart/unique-visitor-chart.component';
import { UserChartComponent } from '../user-chart/user-chart.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DashboardState } from '../../../../../../ngrx/dashboard/dashboard.state';
import * as DashboardActions from '../../../../../../ngrx/dashboard/dashboard.actions';

@Component({
  selector: 'app-dashboard-overview',
  standalone: true,
  imports: [
    CategoryChartComponent,
    PostChartComponent,
    ReportedPostChartComponent,
    UniqueVisitorChartComponent,
    UserChartComponent,
  ],
  templateUrl: './dashboard-overview.component.html',
  styleUrl: './dashboard-overview.component.scss',
})
export class DashboardOverviewComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private router: Router) {}

  viewDetailChart(chartType: string) {
    this.router.navigate([`/dashboard/detail/`, chartType]);
  }

  viewUserManagement() {
    this.router.navigate([`/dashboard/user`]);
  }

  viewPostManagement() {
    this.router.navigate([`/dashboard/post`]);
  }
}
