import { Component, OnDestroy, OnInit } from '@angular/core';
import {combineLatest, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthState} from "../../ngrx/auth/auth.state";
import  * as AuthActions from "../../ngrx/auth/auth.action";
import { ProfileModel } from '../../models/profile.model';
import * as ProfileAction from '../../ngrx/profile/profile.action';
import { ProfileState } from '../../ngrx/profile/profile.state';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit, OnDestroy{

  constructor(
    private router: Router,
    private store: Store<{
      auth: AuthState,
      profile: ProfileState
    }>,
    private toastr: ToastrService
  ) {}

  subscriptions: Subscription[] = [];
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  ngOnInit() {
    this.subscriptions.push(
      this.store.select('auth', 'idToken').subscribe((res) => {
        this.store.dispatch(ProfileAction.getMineProfile({ idToken: res }));
        this.store.select('profile', 'profile').subscribe((res) => {
          if (res.id !== null && res.id !== undefined) {
           this.router.navigate(['/dashboard']);
          }
          else {
            this.store.dispatch(ProfileAction.clearState());
            this.store.dispatch(AuthActions.logout());
            this.router.navigate(['/login']);
          }
        })
      }
      )
    );
  }
}
