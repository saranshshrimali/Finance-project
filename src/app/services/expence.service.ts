import { Injectable } from '@angular/core';
import { Expence } from '../model/expence.model';
import * as firebase from 'firebase';
import { ɵResourceLoaderImpl } from '@angular/platform-browser-dynamic';

@Injectable({
  providedIn: 'root'
})
export class ExpenceService {
   currentUser
  constructor() { 
  
  }

  addExpence(expence){
        return new Promise<any>((resolve)=>{ 
      firebase.firestore().collection("user").doc(firebase.auth().currentUser.uid).collection("expence").add(expence).then(res=>{
        console.log(res)
        resolve(res);
      }).catch(err=>{
        console.log(err)
        resolve();
      });
  })
  }

  deleteExpence(id){
    return new Promise<any>((resolve)=>{
      firebase.firestore().collection("user").doc(firebase.auth().currentUser.uid).collection("expence").doc(id).delete().then(res=>{
        console.log(res);
      
        resolve(res);
      }).catch(err=>{
        console.log(err);
        resolve()
      });
 
    })
    }

  
  getAllExpence(){
   // console.log(firebase.auth().currentUser.uid);
    return new Promise<any>((resolve) => {
      let data=[]
     firebase.firestore().collection("user").doc(firebase.auth().currentUser.uid).collection("expence").onSnapshot(
      (item: any) => {
        item.forEach(element => {
        data.push({id:element.id,data:element.data()});
          resolve({ items: data });
    })
  })
})
  }

   updateExpence(id,updateExpence){
    return new Promise<any>((resolve) => {
    firebase.firestore().collection("user").doc(firebase.auth().currentUser.uid).collection("expence").doc(id).update({
      timestamp:new Date(),
      ammount:updateExpence.ammount,
      category:updateExpence.category
    }).then(res=>{
      resolve(res)
       }).catch(err=>{
         resolve();
       })
   })
   }

   getExpenceById(id){
     
    return new Promise<any>((resolve) => { 
       firebase.firestore().collection("user").doc(firebase.auth().currentUser.uid).collection("expence").doc(id).onSnapshot(
      (item: any) => {
        (element => {
          let data =element.data();
          resolve(data)
    })
  })
})
   }

   getExpenceByCategoryId(id){
     console.log(id)
     return new Promise<any>((resolve) => {  firebase.firestore().collection("user").doc(firebase.auth().currentUser.uid).collection("expence").where("category", "==",id).onSnapshot(
      (item: any) => {
        item.forEach(element => {
          let data =element.data();
          resolve(data)
    })
  })
  })    
   }
  
  }
