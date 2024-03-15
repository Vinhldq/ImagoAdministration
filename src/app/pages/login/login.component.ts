import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import { ButtonModule } from 'carbon-components-angular';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../service/auth/auth.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../../ngrx/auth/auth.state';
import { Subscription } from 'rxjs';
import * as AuthActions from '../../ngrx/auth/auth.actions';
import { Router } from '@angular/router'; // Import Router
import { ProfileState } from '../../ngrx/profile/profile.state';
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, SharedModule, AsyncPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private auth: AuthService,
    private store: Store<{ auth: AuthState , profile: ProfileState}>,
    private router: Router // Inject Router
  ) {}

  subscriptions: Subscription[] = [];
  idToken$ = this.store.select('auth', 'idToken');
  uid$ = this.store.select('auth', 'uid');
  isLoading$ = this.store.select(state => state.profile.isGetLoading);
  errorMessage$ = this.store.select(state => state.profile.getErrorMess);
  isLoadingAuth$ = this.store.select(state => state.auth.isLoading);
  errorMessageAuth$ = this.store.select(state => state.auth.errorMessage);
  ngOnDestroy(): void {
    this.subscriptions.forEach((val) => {
      val.unsubscribe();
    });
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.store.select('auth', 'isSuccessful').subscribe((val) => {
        if (val) {
          this.router.navigate(['/login']); // Navigate to home page
        }
      }),
      this.store.select('auth', 'errorMessage').subscribe((val) => {})
    );
  }

  signWithGoogle() {
    this.store.dispatch(AuthActions.login());

  }
  @Input() isActive = true;
  @Input() @HostBinding("class.cds--loading-overlay") overlay = false;
}
