import { Component, OnInit } from '@angular/core';
import { ISport } from '../ISport';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';
import { FirebaseService } from '../firebase.service'
import { AngularFireAuth } from 'angularfire2/auth';
import { IChatItem } from '../IChatItem'

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  private sub: any;
  sport: string;
  displayName: any;
  chatRef: any;
  chat: any;
  input: string;

  /*
  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, public authService: AuthService, public afAuth: AngularFireAuth) {
    this.route.params.subscribe(params => {
      this.sport = params['id'];
    });
    this.chatRef = db.list('reviews/' + this.sport);
    var user = firebase.auth().currentUser;

    if (user) {
      this.displayName = user.displayName;
    } else {
      this.displayName = 'Guest';
    }
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.sport = params['id']; 
      //get api data for sport in here
      this.SpaceAmericanFootball();
      this.chat = this.db.list<any>('chat/' + params['id']).valueChanges();
   });
  }

  SpaceAmericanFootball(){
    if (this.sport == 'americanfootball'){
      this.sport = 'American Football';
    }
  }
  
*/



  constructor(
    private route: ActivatedRoute, 
    private db: FirebaseService, 
    private af: AngularFireDatabase,
    public authService: AuthService) {
      this.route.params.subscribe(params => {
        this.sport = params['id'];
      });
      var user = firebase.auth().currentUser;
      if (user) {
        this.displayName = user.displayName;
        console.log('diplayname: ' + this.displayName);
      } else {
        this.displayName = 'Guest';
        console.log('diplayname: ' + this.displayName);
      }
    }

    ngOnInit() {
      //this.db.writeNewChatItem('soccer', 'colin', 'I love test comments!');
      
      this.route.params.subscribe(params => {
        this.sport = params['id'];
        this.chat = this.af.list<any>('chat/' + params['id'], ref => ref.orderByChild('size').limitToLast(6)).valueChanges();
        console.log(this.chat);
      });
      
    }

    WriteNewChatItem(){
      console.log('clicked');
      if(this.input != "" && this.input != null){
        this.db.writeNewChatItem(this.sport, this.displayName, this.input);
        this.input = null;
      }
    }


}

