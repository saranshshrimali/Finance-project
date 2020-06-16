import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  uid;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
 
  logout(){
    firebase.auth().signOut().then(res=>{
          this.uid=null;
          console.log(this.uid)
          localStorage.removeItem("uid");
          this.route.navigateByUrl('/auth')
        })
  }

}
