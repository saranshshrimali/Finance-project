import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  public router: Router
  constructor( ) {}
   canActivate(): boolean {
   if (!firebase.auth().currentUser.uid) {
      console.log("false")
       return false;
     }
     else{
       console.log("true")
     return true;
     }
   }
 }
 /// This likely means that the library (@angular/fire/auth) which declares AngularFireAuth has not been processed correctly
//import * as firebase from 'firebase'; eska mtlb h firebase ka all pakages classes ko project me import karna 
//agara firebase se releated koee bhi query legani ho to ye package use me ata h or angular fireauth me bhi ye hi import h ha bhai ab aap dekhlo jada time ni lage or kaam ho jaye esa kuch karo or woh mastrr bhi jada ni bole.
