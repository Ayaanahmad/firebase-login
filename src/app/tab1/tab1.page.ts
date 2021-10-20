import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user = null;
  provider: any;

  constructor(public fireAuth: AngularFireAuth) {
    this.fireAuth.authState.subscribe((user)=>
    { 
      this.user = user ? user : null;
    });
  }
  login(){
    this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  gitlogin(){
    this.fireAuth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }
  fblogin(){
    this.fireAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    this.provider = this.user.photoURL;
  }
  logout(){
    this.fireAuth.signOut();
  }
}
