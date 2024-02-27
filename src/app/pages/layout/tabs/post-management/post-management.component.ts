import { Component, input, Input, OnInit, signal } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { PostComponent } from './components/post/post.component';
import { CategoryComponent } from './components/category/category.component';

@Component({
  selector: 'app-post-management',
  standalone: true,
  imports: [SharedModule, CategoryComponent, PostComponent],
  templateUrl: './post-management.component.html',
  styleUrl: './post-management.component.scss',
})
export class PostManagementComponent {
  @Input() skeleton = false;
  @Input() followFocus = true;
  @Input() cacheActive = false;
  @Input() isNavigation = true;
  @Input() type = 'line';
}
