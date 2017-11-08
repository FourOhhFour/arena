import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
  }

  Login(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(){
          console.log(firebase.auth().currentUser.displayName + ' logged in');
        })
        .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password');
      } else if (errorCode ==='auth/user-not-found'){
        alert("That email isn't registered");
      }
      console.log(error);
    });
    this.router.navigate(['/feed']);
  }

}
