import { Component, HostBinding, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import Notification20 from '@carbon/icons/es/notification/20';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
import Switcher20 from '@carbon/icons/es/switcher/20';
import {IconService, PlaceholderModule} from 'carbon-components-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SharedModule, PlaceholderModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  @HostBinding('class.cds--header') headerClass = true;

  constructor(protected iconService: IconService) {}
  ngOnInit(): void {
    this.iconService.registerAll([Notification20, UserAvatar20, Switcher20]);
  }
}
