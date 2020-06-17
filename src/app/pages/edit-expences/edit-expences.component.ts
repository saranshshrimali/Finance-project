import { Component, OnInit } from '@angular/core';
import { ExpenceService } from 'src/app/services/expence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-expences',
  templateUrl: './edit-expences.component.html',
  styleUrls: ['./edit-expences.component.css']
})
export class EditExpencesComponent implements OnInit {

  expence;
  expenceid;
  categories=[];
  item: any;
  selected = 'Select Category';
  ammount
  constructor(public expenceService:ExpenceService,public route:ActivatedRoute,public categoryService:CategoryServiceService,
    public router:Router) {
      this.getUserCategories();
      console.log(this.categories);
     }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.item = JSON.parse(params.subject);
        this.getExpenceId(this.item['id'])
        this.ammount=this.item.data.ammount;
        this.selected=this.item.data.category;
      }
    });
  }

  getExpenceId(id){
    this.expenceService.getExpenceById(id).then(res=>{
      this.expence=res;
    })
  }

  getUserCategories(){
    this.categoryService.getAllCategory().then(res=>{
     res.items.forEach(element => {
       this.categories.push(element)
       console.log(this.categories);
     });
    })
  }
  onChange(event) {
    this.selected=event;
  }
  save(){
    let data={
      ammount:this.ammount,
      category:this.selected

    };
    this.expenceService.updateExpence(this.item['id'], data).then(res=>{
      this.router.navigateByUrl("/expences");
    })
  }
}