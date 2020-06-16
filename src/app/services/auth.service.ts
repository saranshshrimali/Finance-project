import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router:Router) { }
   signin(email,password){
    return new Promise<any>((resolve) => {
      firebase.auth().signInWithEmailAndPassword(email,password).then(res=>{
      console.log(res.user.uid)
     // this.uid=res.user.uid
      localStorage.setItem("uid",res.user.uid)
      resolve(res.user.uid);
    }).catch(err=>{
      alert(JSON.stringify(err))
      resolve();
    })
  })
  }

   signup(email,password){
    return new Promise<any>((resolve) => {
      firebase.auth().createUserWithEmailAndPassword(email,password).then(res=>{
    console.log(res.user.uid)
    localStorage.setItem("uid",res.user.uid)
  resolve(res.user.uid);
  this.router.navigateByUrl("/home")
    }).catch(err=>{
      alert(JSON.stringify(err))
resolve();
    })
  })
}
resetpassword(email){
  var me=this;
  return new Promise<any>((resolve) => {
    firebase.auth().sendPasswordResetEmail(email).then(res=>{
      alert('we send a link to your mail account please check and generate new password for login!!');
      this.router.navigateByUrl("/login")
      return res
    }).catch(err=>{
      alert('ohh something went to wrong!!')
      return err
    })    
//       .then(() => {
//          resolve({data:"send"})       
//       })
//       .catch((error: any) => {
//         // alert(JSON.stringify(error))
//         resolve() 
//       });
     })
 }

}
