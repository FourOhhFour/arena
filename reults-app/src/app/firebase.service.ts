import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { IChatItem } from './IChatItem'

@Injectable()
export class FirebaseService {
    chat: any;
    listing: AngularFireObject<any>;
    folder: string;
    image: string;
    path: string;

      
    constructor(private af: AngularFireDatabase) {
    }
      
    
    getChatDetails(id:string){
        return this.chat = this.af.list<any>('chat/' + id);
    }

    writeNewChatItem(sport: string, sender: string, message: string){
      console.log('writing review to db');
      const promise = this.af.list('chat/' + sport).push({
        userName: sender, message: message
      });
    }

}