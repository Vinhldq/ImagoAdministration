import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import colorLib from '@kurkle/color';
import { valueOrDefault } from 'chart.js/helpers';
import { SharedModule } from '../../../../../../shared/shared.module';

@Component({
  selector: 'app-reported-post-chart',
  standalone: true,
  imports: [SharedModule, NgChartsModule],
  templateUrl: './reported-post-chart.component.html',
  styleUrl: './reported-post-chart.component.scss',
})
export class ReportedPostChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public MONTHS = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  public CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)',
  };
  public DATA_COUNT = 7;
  public NUMBER_CFG = { count: this.DATA_COUNT, min: 0, max: 100 };

  ngOnInit(): void {
    this.randomize();
  }

  public barChartOptions: ChartConfiguration['options'] = {
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
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: this.MONTHS,
    datasets: [
      {
        label: 'Fake Account',
        data: this.numbers(this.NUMBER_CFG),
        borderColor: this.CHART_COLORS.red,
        backgroundColor: this.CHART_COLORS.blue,
      },
      {
        label: 'Pretending',
        data: this.numbers(this.NUMBER_CFG),
        borderColor: this.CHART_COLORS.red,
        backgroundColor: this.CHART_COLORS.red,
      },
      {
        label: 'Suspicious Activity',
        data: this.numbers(this.NUMBER_CFG),
        borderColor: this.CHART_COLORS.red,
        backgroundColor: this.CHART_COLORS.orange,
      },
    ],
  };

  transparentize(value, opacity) {
    var alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return colorLib(value).alpha(alpha).rgbString();
  }

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
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.chart?.update();
  }
}
