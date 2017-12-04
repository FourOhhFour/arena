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
        //this.listings = this.af.list('/listings') as FirebaseListObservable<Listing[]>;
        //this.folder = "listingimages";
    }
      
    getListings(){
        //return this.;
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

    /*
    addListing(listing){
        //Create Root Ref
        let storageRef = firebase.storage().ref();
     
        for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
            let path = `/${this.folder}/${selectedFile.name}`;
            let imageRef = storageRef.child(path);
            imageRef.put(selectedFile).then((snapshot) => {
                listing.image = selectedFile.name;
                listing.path = path;
                return this.listings.push(listing);
            });
        }
    };
    
    updateImage(id, listing){
        //Create Root Ref
        let storageRef = firebase.storage().ref();
     
        for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
            let path = `/${this.folder}/${selectedFile.name}`;
            let imageRef = storageRef.child(path);
            imageRef.put(selectedFile).then((snapshot) => {
                listing.image = selectedFile.name;
                listing.path = path;
                return this.listings.update(id, listing);
            });
        }
    }
    
    updateListing(id, listing){
        return this.listings.update(id, listing);
    };
    
    deleteListing(id){
        return this.listings.remove(id);
    };
    */
}