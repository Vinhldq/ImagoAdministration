import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from './ngrx/auth/auth.state';
import * as AuthActions from './ngrx/auth/auth.action';
import { LoadingComponent } from './pages/loading/loading.component';
import { Subscription, combineLatest } from 'rxjs';
import { NotificationService } from 'carbon-components-angular';
import * as ProfileAction from './ngrx/profile/profile.action';
import { ProfileState } from './ngrx/profile/profile.state';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, NavbarComponent, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [NotificationService],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Imago Admin';
  subscriptions: Subscription[] = [];
  idToken$ = this.store.select('auth', 'idToken');
  uid$ = this.store.select('auth', 'uid');

  constructor(
    private toastr: ToastrService,
    private auth: Auth,
    private router: Router,
    private store: Store<{
      auth: AuthState;
      profile: ProfileState;
    }>,
  ) {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        let idToken = await user!.getIdToken(true);
        this.store.dispatch(AuthActions.storedIdToken({ idToken }));
        this.store.dispatch(AuthActions.storedUserUid({ uid: user.uid }));
        this.router.navigateByUrl('/loading');
      } else {
        console.log(user);
        console.log('User is signed out');
        this.router.navigateByUrl('/login');
      }
    });
  }

  protected open = false;

  ngOnDestroy(): void {
    this.subscriptions.forEach((val) => {
      val.unsubscribe();
    });
  }

  ngOnInit(): void {
    this.subscriptions.push(
      combineLatest({
        idToken: this.idToken$,
        uid: this.uid$,
      }).subscribe(async (res) => {
        if (res.idToken && res.uid) {
          this.store.dispatch(
            AuthActions.getAuthById({
              token: res.idToken,
              id: res.uid,
            }),
          );
          console.log(res.idToken);
        }
      }),
      this.store.select('auth', 'authDetail').subscribe((val) => {
        if (val.id != undefined && val.id != '') {
          if (val.role == 'admin') {
            console.log(val.role);
            this.router.navigate(['/dashboard']);
            this.toastr.success('Welcome to Imago Admin');
          } else {
            this.store.dispatch(AuthActions.logout());
            this.toastr.error(
              'You are not authorized to access this page',
              'Unauthorized Access',
              {
                timeOut: 5000,
                positionClass: 'toast-top-right',
                progressBar: true,
                progressAnimation: 'increasing',
              },
            );
            console.log(val.role);
            this.router.navigate(['/login']);
          }
        }
      }),
    );
  }
}
