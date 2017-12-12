import { Http } from '@angular/http';
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
  b:any;



  constructor(
    private route: ActivatedRoute, 
    private db: FirebaseService, 
    private af: AngularFireDatabase,
    public authService: AuthService,
    public http: Http) {
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
        this.chat = this.af.list<any>('chat/' + params['id'], ref => ref.orderByChild('item').limitToLast(6)).valueChanges();
        console.log(this.chat);
      });
      
      this.GetApi();
    }

    WriteNewChatItem(){
      console.log('clicked');
      if(this.input != "" && this.input != null){
        this.db.writeNewChatItem(this.sport, this.displayName, this.input);
        this.input = null;
      }
    }

    GetApi(){
      var url = 'https://newsapi.org/v2/top-headlines?' +
      'sources=nfl-news&' +
      'apiKey=2874034a217c499c92e45fddbc5dbc28';

      var req = new Request(url);

      this.http.get(url).map(res => res.json())
      .subscribe(
          data => {
              this.b = data.articles;
              this.b.forEach(m => console.log(m.author));
          });
    }

}

