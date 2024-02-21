import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import colorLib from '@kurkle/color';
import { valueOrDefault } from 'chart.js/helpers';
import { SharedModule } from '../../../../../../shared/shared.module';
import { Store } from '@ngrx/store';
import { DashboardState } from '../../../../../../ngrx/dashboard/dashboard.state';

@Component({
  selector: 'app-reported-post-chart',
  standalone: true,
  imports: [SharedModule, NgChartsModule],
  templateUrl: './reported-post-chart.component.html',
  styleUrl: './reported-post-chart.component.scss',
})
export class ReportedPostChartComponent implements OnInit {
  constructor(private store: Store<{ dashboard: DashboardState }>) {}

  dashboardDetail$ = this.store.select((state) => state.dashboard);

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public labels: string[] = [
    'Fake Account',
    'Pretending',
    'Suspicious Activity',
  ];
  public MONTHS = [];
  public CHART_COLORS: string[] = [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 159, 64)',
    'rgb(201, 203, 207)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
  ];
  public DATA_COUNT: number;
  public NUMBER_CFG: any = {};

  ngOnInit(): void {
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
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
    };
    this.barChartType = 'bar';
    this.barChartData = {
      labels: this.MONTHS,
      datasets: [],
    };
    for (let i = 0; i < this.labels.length; i++) {
      this.barChartData.datasets.push({
        label: this.labels[i],
        data: this.numbers(this.NUMBER_CFG),
        backgroundColor: this.CHART_COLORS[i],
      });
    }

    this.randomize();
  }

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
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    for (let i = 0; i < this.DATA_COUNT; i++) {
      for (let j = 0; j < this.barChartData.datasets.length; j++) {
        this.barChartData.datasets[j].data[i] = Math.round(Math.random() * 100);
      }
    }

    this.chart?.update();
  }
}
