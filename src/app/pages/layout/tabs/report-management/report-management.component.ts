import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-report-management',
  standalone: true,
  imports: [SharedModule, PostComponent, UserComponent],
  templateUrl: './report-management.component.html',
  styleUrl: './report-management.component.scss',
})
export class ReportManagementComponent {
  @Input() skeleton = false;
  @Input() followFocus = true;
  @Input() cacheActive = false;
  @Input() isNavigation = true;
  @Input() type = 'line';
}
