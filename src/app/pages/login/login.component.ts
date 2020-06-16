import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route:Router,public authService:AuthService,) { }
                    
  ngOnInit(): void {
  }


  login(form:NgForm){
    this.authService.signin(form.value.email,form.value.password).then(user=>{
      if(user){
        this.route.navigate(['/home']);
      }
      else{
        console.log(user);
      }
    })
    }
  google(){
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());

  }
  GoogleAuth() {
  }  

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return firebase.auth().signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!');
        this.route.navigate(['/home']);
    }).catch((error) => {
        console.log(error)
    })
  }

}

