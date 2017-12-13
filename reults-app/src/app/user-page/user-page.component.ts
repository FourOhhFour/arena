import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';
import { FirebaseService } from '../firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireObject } from 'angularfire2/database/interfaces';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  uid: string;
  item: any;
  emailInput: any;
  nameInput: any;
  sport1: any;
  sport2: any;

  constructor(
    private db: FirebaseService, 
    private af: AngularFireDatabase, 
    public authService: AuthService,
    private router: Router,
    public http: Http) {
      var user = firebase.auth().currentUser;
      if (user) {
        this.uid = user.uid;
        this.item = af.object<any>('users/' + user.uid).valueChanges().subscribe(item => this.item = item);
        console.log('item - ' + this.item.email);
        console.log('user - ' + user.uid);
        this.emailInput = this.item.email;
        this.nameInput = this.item.name;
      }
      else{
        this.router.navigate(['/'])
      }
    }

  ngOnInit() {
  }

  public Clicked(){
    this.updateUserData();
    this.updateUserDisplayNameAndEmail();
  }

  private updateUserData(): void {
    // Writes user name and email to realtime db
      let path = `users/${this.uid}`; // Endpoint on firebase
      let data = {
                    email: this.item.email,
                    name: this.item.name,
                    sport1: this.item.sport1,
                    sport2: this.item.sport2
                  }
  
      this.af.object(path).update(data)
      .catch(error => console.log(error));
  }

  updateUserDisplayNameAndEmail():void{
    firebase.auth().currentUser.updateProfile({
      displayName: this.item.name,
      photoURL: null
    });
    firebase.auth().currentUser.updateEmail(this.item.email);
  }

}
