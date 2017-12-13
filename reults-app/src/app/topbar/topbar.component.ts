import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit{

  user: Observable<firebase.User>;
  uid: Observable<string>;
  loggedIn: boolean = false;

  constructor(public router: Router, public afAuth: AngularFireAuth, public auths: AuthService) {}

  ngOnInit() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.user = user;
        this.loggedIn = true;
        this.uid = this.user.uid;
        console.log('logged in = ' + this.loggedIn + ' - user: ' + this.user.uid + ' - ' + this.uid);
      }
      else{
        this.user = null;
        this.loggedIn = false;
        console.log('logged in = false');
        this.uid = null;
      }
    });
  }
  

  LoggedIn(): boolean{
    return this.loggedIn;
  }

  Logout(){
    this.auths.signOut();
    this.router.navigate(['/sport']);
  }

  isAuth() {
    return this.auths.isAuthenticated();
}

}
