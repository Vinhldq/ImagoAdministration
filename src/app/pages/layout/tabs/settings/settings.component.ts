import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { AccordionModule, ButtonModule, ListItem, ModalModule, PaginationModel, } from "carbon-components-angular";
import { set } from "@angular/fire/database";
import { SlicePipe } from "@angular/common";
import { Store } from "@ngrx/store";
import { AuthState } from "../../../../ngrx/auth/auth.state";
import * as AuthActions from "../../../../ngrx/auth/auth.action";
import { logout } from "../../../../ngrx/auth/auth.action";
import { Router } from '@angular/router';
import { Subscription } from "rxjs";
import { ProfileState } from "../../../../ngrx/profile/profile.state";
import * as ProfileAction from "../../../../ngrx/profile/profile.action";
import { ProfileModel } from "../../../../models/profile.model";
import { ReportState } from '../../../../ngrx/report/report.state';
import * as ReportAction from '../../../../ngrx/report/report.actions';
import { ReportModel } from '../../../../models/report.model';
export interface History {
  id: number;
  src: string;
  cap: string;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [SharedModule, ButtonModule, AccordionModule, ModalModule, SlicePipe,],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit, OnDestroy {

  translations: any;
  items = [
    <ListItem>{ content: "Vienamese", selected: false },
    <ListItem>{ content: "English", selected: false },
    <ListItem>{ content: "France", selected: false },
  ];
  themes = [
    <ListItem>{ content: "Dark", selected: false },
    <ListItem>{ content: "Light", selected: false },
  ];
  subscriptions: Subscription[] = [];
  constructor(private store:
    Store<{
      auth: AuthState; profile: ProfileState;
      report: ReportState;

    }>, private router: Router,private cdr: ChangeDetectorRef) {
  }


 
  selected: ListItem;
  onSelect(ev) {
    this.selected = ev.item;
  }

  disabled = false;
  protected open = false;
  dataset = [];
  report$ = this.store.select('report', 'reportListPagination');
  @Input() modelPagigation = new PaginationModel();
  // @Input() disabledPagigation = false;




  @Input() disabledPagigation = false;
  dataChoose: ReportModel[] = [];
  profileDetail: ProfileModel;
  ngOnInit() {
    // Initialize currentPage to 1
    this.modelPagigation.currentPage = 1;
  
    this.subscriptions.push(
      this.store.select('auth', 'idToken').subscribe((val) => {
        this.store.dispatch(ReportAction.getReportStatus({ token: val, page: 1 }));
      }),
      this.store.select('profile', 'profile').subscribe((val) => {
        this.profileDetail = val;
      }),
      this.report$.subscribe((val) => {
        this.dataset = val.data;
        this.dataset = this.dataset.map((element) => {
          const date = new Date(
            element.createdAt._seconds * 1000 +
            element.createdAt._nanoseconds / 1000000,
          );
          const formattedDate = date.toLocaleString('vi-VN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour12: true,
          });
          return {
            ...element,
            updatedAt: formattedDate,
          };
        });
        console.log(this.dataset);
        this.dataChoose = this.dataset;
        // Update the totalDataLength
        this.modelPagigation.totalDataLength = val.endPage;
        // Trigger change detection
        this.cdr.detectChanges();
      })
    );
  }
  
  selectPage(page: any) {
    this.modelPagigation.currentPage = page;
    console.log(page);
    this.store.select('auth', 'idToken').subscribe((val) => {
      this.store.dispatch(ReportAction.getReportStatus({ token: val, page: page }));
    });
    // Trigger change detection
    this.cdr.detectChanges();
  }
  protected openModal = false;
  protected readonly logout = logout;

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  signOut() {
    this.profileDetail = null;
    this.store.dispatch(ProfileAction.clearState());
    this.store.dispatch(AuthActions.logout());
    this.store.select('auth', 'isLogoutSuccess').subscribe((val) => {
      if (val) {
        console.log(val);
        this.router.navigate(['/login']);
      }
    }
    );
  }
}