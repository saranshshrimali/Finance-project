import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {

  categories=[]
  constructor(public category:CategoryServiceService,private router:Router) {

   }
   gotoadd(){
this.router.navigate(["/add-category"])
   }

  ngOnInit(): void {
    this.category.getAllCategory().then(res=>{
    res.items.forEach(element => {
      this.categories.push(element);
    });
    })
  }
  deleteCategory(id){
    console.log("inside delete")
    this.category.deleteCategory(id).then(res=>{
      console.log(res);
     for(var i=0; i<this.categories.length;i++){
       if(this.categories[i].id==id){
        this.categories.splice(i, 1);
       }
     } 
    }).catch(err=>{
      console.log(err);
    });
  }
  editCategory(cate){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        subject: JSON.stringify(cate),
        
      }, skipLocationChange: true
    }
    this.router.navigate(['/edit-category'], navigationExtras);
  }
}
