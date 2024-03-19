import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from '../../ngrx/auth/auth.state';
import * as AuthActions from '../../ngrx/auth/auth.actions';
import { ProfileModel } from '../../models/profile.model';
import * as ProfileAction from '../../ngrx/profile/profile.actions';
import { ProfileState } from '../../ngrx/profile/profile.state';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private store: Store<{
      auth: AuthState;
      profile: ProfileState;
    }>,
    private toastr: ToastrService
  ) {}

  subscriptions: Subscription[] = [];
  ngOnDestroy(): void {}
  ngOnInit() {}
}
