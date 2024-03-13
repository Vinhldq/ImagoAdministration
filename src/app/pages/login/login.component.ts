import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonModule } from 'carbon-components-angular';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../service/auth/auth.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../../ngrx/auth/auth.state';
import { Subscription } from 'rxjs';
import * as AuthActions from '../../ngrx/auth/auth.actions';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private auth: AuthService,
    private store: Store<{ auth: AuthState }>,
    private router: Router // Inject Router
  ) {}

  subscriptions: Subscription[] = [];
  idToken$ = this.store.select('auth', 'idToken');
  uid$ = this.store.select('auth', 'uid');

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
}
