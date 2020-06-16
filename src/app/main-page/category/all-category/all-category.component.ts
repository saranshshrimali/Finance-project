import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

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
      this.categories=res;
      console.log(this.categories);
    })
  }
  deleteCategory(id){
    console.log("inside delete")
    this.category.deleteCategory(id);
  }

}
