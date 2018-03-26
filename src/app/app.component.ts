import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    firebase.initializeApp({
    apiKey: "AIzaSyCCx_ezHKA3NaKO5wg31MEox2mo4-y3SBM",
    authDomain: "ng-recipe-book-2911.firebaseapp.com"
    });
  }
}
