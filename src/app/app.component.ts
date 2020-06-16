import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Finance-project';
  constructor(private route:Router){
    var me = this;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        me.route.navigate(['home']);
      } else {
        me.route.navigate(["/login"]);
      }
    })
  }
  }
  
