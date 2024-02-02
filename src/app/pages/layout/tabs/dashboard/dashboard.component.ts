import { Component } from '@angular/core';
import { UserChartComponent } from './components/user-chart/user-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UserChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
