import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PostComponent } from '../../../report-management/components/post/post.component';
import {
  TableHeaderItem,
  TableItem,
  TableModel,
  TabsModule,
} from 'carbon-components-angular';
import { PostChartComponent } from '../post-chart/post-chart.component';
import { ReportedPostChartComponent } from '../reported-post-chart/reported-post-chart.component';
import { DashboardOverviewComponent } from '../dashboard-overview/dashboard-overview.component';
import { UserChartComponent } from '../user-chart/user-chart.component';
import { UniqueVisitorChartComponent } from '../unique-visitor-chart/unique-visitor-chart.component';
import { CategoryChartComponent } from '../category-chart/category-chart.component';
import { NgClass, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { DashboardState } from '../../../../../../ngrx/dashboard/dashboard.state';
import { ActivatedRoute } from '@angular/router';
import * as DashboardActions from '../../../../../../ngrx/dashboard/dashboard.action';
import { SharedModule } from '../../../../../../shared/shared.module';

@Component({
  selector: 'app-dashboard-detail',
  standalone: true,
  imports: [
    SharedModule,
    TabsModule,
    PostChartComponent,
    ReportedPostChartComponent,
    DashboardOverviewComponent,
    PostComponent,
    UserChartComponent,
    UniqueVisitorChartComponent,
    CategoryChartComponent,
    NgClass,
    NgIf,
  ],
  templateUrl: './dashboard-detail.component.html',
  styleUrl: './dashboard-detail.component.scss',
})
export class DashboardDetailComponent implements OnInit, OnDestroy {
  dashboardDetail$ = this.store.select((state) => state.dashboard);
  @Input() model = new TableModel();
  @Input() noData = false;

  tabIndex: number = 0;

  ngOnInit(): void {
    const chartName = this.activatedRoute.snapshot.params['name'];
    this.store.dispatch(DashboardActions.getChart({ chart: chartName }));
    // this.setActiveChart(chartName, this.tabIndex);

    this.model.header = [
      new TableHeaderItem({
        data: 'Days of the week',
        title: 'Table header title',
      }),
      new TableHeaderItem({
        data: 'Data',
        className: 'my-class',
      }),
    ];

    this.model.rowsSelectedChange.subscribe((event) => console.log(event));
    this.model.selectAllChange.subscribe((event) =>
      console.log(event ? 'All rows selected!' : 'All rows deselected!')
    );

    if (!this.noData && !this.skeleton) {
      this.model.data = [
        [
          new TableItem({ data: 'MONDAY', title: 'Table item title' }),
          new TableItem({ data: '123' }),
        ],
        [new TableItem({ data: 'TUESDAY' }), new TableItem({ data: '456' })],
        [new TableItem({ data: 'WEDNESDAY' }), new TableItem({ data: '789' })],
        [new TableItem({ data: 'THURSDAY' }), new TableItem({ data: '147' })],
        [new TableItem({ data: 'FRIDAY' }), new TableItem({ data: '258' })],
        [new TableItem({ data: 'SATURDAY' }), new TableItem({ data: '369' })],
        [new TableItem({ data: 'SUNDAY' }), new TableItem({ data: '159' })],
      ];
    }
  }

  constructor(
    private store: Store<{ dashboard: DashboardState }>,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((id) => {
      console.log(id);
    });
  }

  tabList = [
    {
      name: 'Posts',
      activeTab: 'post',
    },
    {
      name: 'Reported Posts',
      activeTab: 'reportedPost',
    },
    {
      name: 'Users',
      activeTab: 'user',
    },
    {
      name: 'Unique Visitors',
      activeTab: 'uniqueVisitor',
    },
    {
      name: 'Categories',
      activeTab: 'category',
    },
  ];

  @Input() skeleton = false;
  @Input() followFocus = true;
  @Input() cacheActive = false;
  @Input() isNavigation = true;
  @Input() type = 'line';

  activeChart: string = '';

  setActiveChart(chart: string, index: number) {
    this.activeChart = chart;
    this.tabIndex = index;
    console.log(this.tabIndex);
  }

  ngOnDestroy(): void {
    this.store.dispatch(DashboardActions.getChart({ chart: '' }));
  }
}
