import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit{

  user: Observable<firebase.User>;
  loggedIn: boolean = false;

  constructor(private router: Router, public afAuth: AngularFireAuth) {}

  ngOnInit() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.user = user;
        this.loggedIn = true;
        console.log('logged in = true');
      }
      else{
        this.user = null;
        this.loggedIn = false;
        console.log('logged in = false');
      }
      
    });
  }

  

  LoggedIn(): boolean{
    return this.loggedIn;
  }

}
