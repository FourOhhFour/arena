import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: Observable<firebase.User>;
  //router: Router;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
  }

  Register(email: string, username: string, password: string){
    this.CreateNewUser(email, username, password);
    //then go back to feed page
    this.router.navigate(['/feed']);
  }

  CreateNewUser(email: string, username: string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(function() {
          firebase.auth().currentUser.updateProfile({
            displayName: username,
            photoURL: null
          }).then(function(){
            console.log(firebase.auth().currentUser.displayName);
          });

        })
        .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/email-already-in-use') {
        alert('That email is already registered');
      }
      console.log(error);
    });
  }

}
