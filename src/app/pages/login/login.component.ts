import { Component } from '@angular/core';
import {ButtonModule} from "carbon-components-angular";
import {SharedModule} from "../../shared/shared.module";

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

}
