import { Component, OnInit } from '@angular/core';
import { Expence } from 'src/app/model/expence.model';
import { ExpenceService } from 'src/app/services/expence.service';
import { CategoryServiceService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expences',
  templateUrl: './add-expences.component.html',
  styleUrls: ['./add-expences.component.css']
})
export class AddExpencesComponent implements OnInit {

  expence = [];
  amount:any;
  categories=[];
  selected = 'Select Category';
  constructor(public expenceService:ExpenceService,public router:Router,public categoryService:CategoryServiceService) { }

  ngOnInit(): void {
    this.getUserCategories();
  }
  onChange(event) {
    this.selected=event;
  }
   addExpence(){
    let data={
      timestamp:new Date(),
      ammount:this.amount,
      category:this.selected

    }
    this.expenceService.addExpence(data).then(res=>{
      console.log(res);
      this.router.navigateByUrl("/expences");
    })
  }

  getUserCategories(){
    this.categoryService.getAllCategory().then(res=>{
      res.items.forEach(element => {
        this.categories.push(element)
      });
      
    })
  }
}
 //bhaii kidar ko