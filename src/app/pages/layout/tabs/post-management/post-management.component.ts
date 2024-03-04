import { Component, input, Input, OnInit, signal } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { PostComponent } from './components/post/post.component';
import { CategoryComponent } from './components/category/category.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-management',
  standalone: true,
  imports: [SharedModule, CategoryComponent, PostComponent],
  templateUrl: './post-management.component.html',
  styleUrl: './post-management.component.scss',
})
export class PostManagementComponent implements OnInit {
  @Input() skeleton = false;
  @Input() followFocus = true;
  @Input() cacheActive = false;
  @Input() isNavigation = true;
  @Input() type = 'line';

  tabIndex = 0;

  types = [
    {
      name: 'Post',
      route: 'post',
    },
    {
      name: 'Category & Hashtag',
      route: 'category',
    },
  ];

  constructor(private router: Router) {}

  navigateTo(route: string, tabIndex: number) {
    this.tabIndex = tabIndex;
    this.router.navigate(['dashboard/post/', route]);
  }

  ngOnInit(): void {
    let name = this.router.url.split('/').pop();
    let index = this.types.findIndex((item) => item.route === name);
    this.navigateTo(name, index);
  }
}
