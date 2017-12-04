import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  username: string;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  Register(){
    this.authService.emailSignUp(this.email, this.password, this.username);
    this.email = this.password = this.username = '';
    //then go back to feed page
    this.router.navigate(['/feed']);
  }

}
