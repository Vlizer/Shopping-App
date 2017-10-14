import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';


  ngOnInit(): void {

    firebase.initializeApp({
      apiKey: 'AIzaSyCTN4SSGxDNXDQ-3VqyA9GU917CJlqnMy4',
      authDomain: 'ng-recipes-book-1.firebaseapp.com'
    });
  }
}
