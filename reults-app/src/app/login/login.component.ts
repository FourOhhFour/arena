import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 

  email: string;
  password: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  Login() {
    this.authService.emailLogin(this.email, this.password);
    this.email = this.password = '';
    //then go back to feed page
    this.router.navigate(['/feed']);
  }

}
