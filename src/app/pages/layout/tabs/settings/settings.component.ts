import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import {
  AccordionModule,
  ButtonModule,
  ListItem,
  ModalModule,
  PaginationModel,
} from 'carbon-components-angular';
import { set } from '@angular/fire/database';
import { SlicePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../../ngrx/auth/auth.state';
import * as AuthActions from '../../../../ngrx/auth/auth.actions';
import { logout } from '../../../../ngrx/auth/auth.actions';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfileState } from '../../../../ngrx/profile/profile.state';
import * as ProfileAction from '../../../../ngrx/profile/profile.actions';
import { ProfileModel } from '../../../../models/profile.model';
export interface History {
  id: number;
  src: string;
  cap: string;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    SharedModule,
    ButtonModule,
    AccordionModule,
    ModalModule,
    SlicePipe,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit, OnDestroy {
  @Input() modelPagination = new PaginationModel();
  @Input() disabledPagination = false;
  @Input() pageInputDisabled = false;
  translations: any;
  items = [
    <ListItem>{ content: 'Vienamese', selected: false },
    <ListItem>{ content: 'English', selected: false },
    <ListItem>{ content: 'France', selected: false },
  ];
  themes = [
    <ListItem>{ content: 'Dark', selected: false },
    <ListItem>{ content: 'Light', selected: false },
  ];
  constructor(
    private store: Store<{ auth: AuthState; profile: ProfileState }>,
    private router: Router
  ) {}
  subscriptions: Subscription[] = [];
  signOut() {
    this.store.dispatch(AuthActions.logout());
    this.store.select('auth', 'isLogoutSuccess').subscribe((res) => {
      if (res) {
        this.router.navigate(['/login']);
        console.log('Logout success!!!');
      }
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((val) => {
      val.unsubscribe();
    });
  }
  selected: ListItem;
  onSelect(ev) {
    this.selected = ev.item;
  }

  disabled = false;
  protected open = false;
  dataset: History[] = [
    {
      id: 1,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You have approved CguIPlJRMm1710501118781 s post at 13:00 on January 8, 2024.',
    },
    {
      id: 2,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You transferred 43D2re4kb2PNPQzsTpGBHUGydBq1 permissions to user at 14:00 February 8, 2024.',
    },
    {
      id: 3,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You transferred 43D2re4kb2PNPQzsTpGBHUGydBq1 s permissions to admin at 14:00 February 18, 2024.',
    },
    {
      id: 4,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You have approved KnhhYCMbLu1710492771013 s post at 13:00 on January 8, 2024.',
    },
    {
      id: 5,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You have approved KnhhYCMbLu1710492771014 s post at 13:00 on January 8, 2024.',
    },
    {
      id: 6,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You have approved KnhhYCMbLu1710492771015 s post at 13:00 on January 8, 2024.',
    },
    {
      id: 7,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You have approved KnhhYCMbLu1710492771016 s post at 13:00 on January 8, 2024.',
    },
    {
      id: 8,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You have approved KnhhYCMbLu1710492771017 s post at 13:00 on January 8, 2024.',
    },

    {
      id: 9,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You have approved KnhhYCMbLu1710492771018 s post at 13:00 on January 8, 2024.',
    },
    {
      id: 10,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You have approved KnhhYCMbLu1710492771019 s post at 13:00 on January 8, 2024.',
    },
    {
      id: 11,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You transferred 43D2re4kb2PNPQzsTpGBHUGydBq1 permissions to user at 14:00 February 8, 2024.',
    },
    //create help me 10 data like that
    {
      id: 12,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You have approved CguIPlJRMm1710501118781 s post at 13:00 on January 8, 2024.',
    },
    {
      id: 13,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You transferred 43D2re4kb2PNPQzsTpGBHUGydBq1 permissions to user at 14:00 February 8, 2024.',
    },
    {
      id: 14,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You transferred 43D2re4kb2PNPQzsTpGBHUGydBq1 s permissions to admin at 14:00 February 18, 2024.',
    },
    {
      id: 15,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You have approved KnhhYCMbLu1710492771013 s post at 13:00 on January 8, 2024.',
    },
    {
      id: 16,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You have approved KnhhYCMbLu1710492771014 s post at 13:00 on January 8, 2024.',
    },
    {
      id: 17,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You have approved KnhhYCMbLu1710492771015 s post at 13:00 on January 8, 2024.',
    },
    {
      id: 18,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You have approved KnhhYCMbLu1710492771016 s post at 13:00 on January 8, 2024.',
    },
    {
      id: 19,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You have approved KnhhYCMbLu1710492771017 s post at 13:00 on January 8, 2024.',
    },
    {
      id: 20,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You have approved KnhhYCMbLu1710492771018 s post at 13:00 on January 8, 2024.',
    },
    {
      id: 21,
      src: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      cap: 'You have approved KnhhYCMbLu1710492771019 s post at 13:00 on January 8, 2024.',
    },
  ];
  @Input() modelPagigation = new PaginationModel();
  @Input() disabledPagigation = false;

  // @ts-ignore
  @Input() pageInputDisabled = false;
  dataChoose: History[];
  dataLength = this.dataset.length;
  dataLengthPerPage = 8;
  dataResidual = this.dataLength / this.dataLengthPerPage;

  profileDetail: ProfileModel;
  ngOnInit() {
    this.subscriptions.push(
      this.store.select('auth', 'idToken').subscribe((val) => {
        this.store.dispatch(
          ProfileAction.getMineProfile({
            idToken: val,
          })
        );
        this.store.dispatch(ProfileAction.getMineProfile({ idToken: val }));
        this.store.select('profile', 'profile').subscribe((val) => {
          this.profileDetail = val;
          console.log(val);
        });
      })
    );

    console.log('Data length', this.dataLength);
    this.modelPagigation.currentPage = 1;
    this.modelPagigation.totalDataLength = Math.ceil(
      this.dataLength / this.dataLengthPerPage
    );
    this.dataChoose = this.dataset.slice(0, this.dataLengthPerPage);
  }

  selectPage(page) {
    console.log('Loading page', page, 'from pagination model');
    let beginGet = (page - 1) * this.dataLengthPerPage;
    let endGet = page * this.dataLengthPerPage;
    this.modelPagigation.currentPage = page; // Corrected here
    this.dataChoose = this.dataset.slice(beginGet, endGet);
    console.log(beginGet, '+', endGet);
  }
  protected openModal = false;

  protected readonly logout = logout;
}
