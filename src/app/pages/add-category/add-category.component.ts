import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryname;
  constructor(public category:CategoryServiceService,public router:Router) { }

  ngOnInit(): void {
  }

  addCategory(){
    this.category.addCategory(this.categoryname).then(res=>{
      if(res!=null){
        this.router.navigateByUrl('/category')
      }
    });
  }

}
