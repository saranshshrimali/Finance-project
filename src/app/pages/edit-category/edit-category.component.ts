import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  changecategory;
  categoryid;
  item=[];
  id: any;
  constructor(public route:ActivatedRoute,public category:CategoryServiceService,public router:Router) { 
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params) {
        let data=JSON.parse(params.subject)
        this.item =data.data.name;
        this.id=data.id;
        
      }
    });
  }

  // getCategory(id){
  //   this.category.getCategoryById(id).then(res=>{
  //     console.log(res)
  //     this.changecategory=res;
  //   })
  // }

  save(){
    this.category.changecategory(this.id, this.item).then(res=>{
      this.router.navigateByUrl("/category");
    })
  }

}

