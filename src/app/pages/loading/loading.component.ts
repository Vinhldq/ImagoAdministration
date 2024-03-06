import { Component } from '@angular/core';
import {combineLatest, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthState} from "../../ngrx/auth/auth.state";
import  * as AuthActions from "../../ngrx/auth/auth.action";
@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

  constructor(
    private router: Router,
    private store: Store<{ auth: AuthState }>,
  ) {}



}
