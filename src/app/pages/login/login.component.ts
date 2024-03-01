import { Component } from '@angular/core';
import {ButtonModule} from "carbon-components-angular";
import {SharedModule} from "../../shared/shared.module";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    SharedModule ,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private auth: AuthService) {
  }
  signWithGoogle(){
    this.auth.signWithGoogle();
  }
}
