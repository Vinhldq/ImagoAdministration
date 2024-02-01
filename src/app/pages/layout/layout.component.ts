import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, SharedModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
