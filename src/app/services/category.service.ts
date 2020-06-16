import { Injectable } from '@angular/core';
import { Category } from '../model/category.model';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  categories: Category[] | any = []

  constructor() {
    }

  addCategory(categoryname) {
  
    return new Promise<any>((resolve) => {
    firebase.firestore().collection("user").doc(firebase.auth().currentUser.uid).collection("category").add({name:categoryname}).then(res=>{
      console.log(res);
      resolve(res)
    }).catch(err=>{
      resolve()
    });
    })
  }

  deleteCategory(id) {
    return new Promise<any>((resolve) => {
    firebase.firestore().collection("user").doc(firebase.auth().currentUser.uid).collection("category").doc(id).delete().then(res=>{
      resolve(res)
    })
    .catch(err=>{
      console.log(err)
    });
  })}

  // getAllCategory(){
  //   return this.db.collection("category",ref=>ref.where("uid","==", this.auth.getUid())).snapshotChanges().pipe(
  //     map(actions => actions.map(a => {
  //       const data = a.payload.doc.data() as any;
  //       const id = a.payload.doc.id;
  //       return { id, ...data };
  //     }))
  //   );
  // }
  getAllCategory() {
    return new Promise<any>((resolve) => {
      let data=[];
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          firebase.firestore().collection("user").doc(user.uid).collection("category").onSnapshot((res: any) => {
            res.forEach(element => {
               data.push({
                id:element.id,
                data:element.data()
              })
              resolve({ items: data })
            });
          })
        }


      })
    })

  }

  changecategory(id, updatecategory) {
    return new Promise<any>((resolve) => {
     firebase.firestore().collection("user").doc(firebase.auth().currentUser.uid).collection("category").doc(id).update ({name:updatecategory}).then(res=>{
       console.log(res)
resolve(res)
     }).catch(err=>{
      console.log(err)
       resolve()
     })
    })
  }

  getCategoryById(id) {

    return new Promise<any>((resolve) => {
      firebase.firestore().collection("user").doc(firebase.auth().currentUser.uid).collection("category").doc(id).onSnapshot((item: any) => {
        item.forEach(element => {
          resolve(element.data())
        });
      })
    })
  }
  // getAllDummyValues(){
  //   this.db.collection("dummy").valueChanges().subscribe(res=>{
  //     console.log(res);
  //   })
  // }
}
