import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import { SharedModule } from '../../../../../../shared/shared.module';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { valueOrDefault } from 'chart.js/helpers';
import { Store } from '@ngrx/store';
import { DashboardState } from '../../../../../../ngrx/dashboard/dashboard.state';
import { AuthState } from '../../../../../../ngrx/auth/auth.state';
import * as AuthActions from '../../../../../../ngrx/auth/auth.action';
import { PostState } from '../../../../../../ngrx/post/post.state';
import * as PostActions from '../../../../../../ngrx/post/post.actions';
import { PostModel } from '../../../../../../models/post.model';

@Component({
  selector: 'app-post-chart',
  standalone: true,
  imports: [SharedModule, NgChartsModule],
  templateUrl: './post-chart.component.html',
  styleUrl: './post-chart.component.scss',
})
export class PostChartComponent implements OnInit {
  dashboardDetail$ = this.store.select((state) => state.dashboard);
  authList$ = this.store.select((state) => state.auth.getAllAuth);
  postList$ = this.store.select((state) => state.post.postList);
  page$ = this.store.select((state) => state.post.postList.endPage);

  constructor(
    private store: Store<{
      dashboard: DashboardState;
      auth: AuthState;
      post: PostState;
    }>,
  ) {}

  postList: PostModel[] = [];
  postNumber: number[] = [];

  ngOnInit(): void {
    console.log('post chart');
    this.store
      .select((state) => state.auth.idToken)
      .subscribe((data) => {
        if (data !== '') {
          for (let i = 1; i <= 1; i++) {
            this.store.dispatch(
              PostActions.getAllPosts({ token: data, page: 1 }),
            );
            this.postList$.subscribe((data) => {
              this.postList = [];
              this.postNumber = [];
              data.data.forEach((element) => {
                this.postList.push(element);
              });
              this.postList.forEach((element) => {
                let date = new Date(
                  element.createdAt._seconds * 1000 +
                    element.createdAt._nanoseconds / 1000000,
                );
                let day = date.getDay();
                this.postNumber[day] = this.postNumber[day] + 1 || 1;
              });
              this.randomize();
            });
          }
        }
      });

    this.dashboardDetail$.subscribe((data) => {
      if (data.chart == '') {
        this.MONTHS = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY'];
      } else {
        this.MONTHS = [
          'MONDAY',
          'TUESDAY',
          'WEDNESDAY',
          'THURSDAY',
          'FRIDAY',
          'SATURDAY',
          'SUNDAY',
        ];
      }
    });
    this.DATA_COUNT = this.MONTHS.length;
    this.NUMBER_CFG = { count: this.DATA_COUNT, min: 0, max: 100 };
    this.barChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    };
    this.barChartType = 'bar';
    this.barChartData = {
      labels: this.MONTHS,
      datasets: [
        {
          data: this.numbers(this.NUMBER_CFG),
          backgroundColor: this.CHART_COLORS[4],
        },
      ],
    };
    this.randomize();
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public MONTHS = [];
  public CHART_COLORS: string[] = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
  ];
  public DATA_COUNT: number;
  public NUMBER_CFG: any = {};

  public barChartOptions: ChartConfiguration['options'] = {};
  public barChartType: ChartType;
  public barChartData: ChartData<'bar'>;

  public numbers(config) {
    var cfg = config || {};
    var min = valueOrDefault(cfg.min, 0);
    var max = valueOrDefault(cfg.max, 100);
    var from = valueOrDefault(cfg.from, []);
    var count = valueOrDefault(cfg.count, 8);
    var decimals = valueOrDefault(cfg.decimals, 8);
    var continuity = valueOrDefault(cfg.continuity, 1);
    var dfactor = Math.pow(10, decimals) || 0;
    var data = [];
    var i, value;

    for (i = 0; i < count; ++i) {
      value = (from[i] || 0) + this.rand(min, max);
      if (this.rand(min, max) <= continuity) {
        data.push(Math.round(dfactor * value) / dfactor);
      } else {
        data.push(null);
      }
    }
    return data;
  }

  public rand(min, max) {
    min = valueOrDefault(min, 0);
    max = valueOrDefault(max, 0);
    this._seed = (this._seed * 9301 + 49297) % 233280;
    return min + (this._seed / 233280) * (max - min);
  }

  _seed = Date.now();

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {}

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {}

  public randomize(): void {
    for (let i = 0; i < this.DATA_COUNT; i++) {
      this.barChartData.datasets[0].data[i] = this.postNumber[i];
    }

    this.chart?.update();
  }
}
