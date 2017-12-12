import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';
import { FirebaseService } from '../firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireObject } from 'angularfire2/database/interfaces';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  sports: string[] = new Array();
  item: any;

  constructor(
    private db: FirebaseService, 
    private af: AngularFireDatabase, 
    public authService: AuthService) {
      var user = firebase.auth().currentUser;
      if (user) {
        this.item = af.object<any>('users/' + user.uid).valueChanges().subscribe(item => {
          this.item = item;
          if(this.item.sport1 == true){
            this.sports.push('nhl');
          }
          if(this.item.sport2 == true){
            this.sports.push('nfl');
          }});
        console.log('item - ' + this.item.email);
        console.log('user - ' + user.uid);
        
      }
      else{
        this.sports = ['nhl', 'nfl'];
      }
      
    }

  ngOnInit() {
  }

}
