import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenceService } from 'src/app/services/expence.service';
import { CategoryServiceService } from 'src/app/services/category.service';
import { Expence } from 'src/app/model/expence.model';

@Component({
  selector: 'app-add-expences',
  templateUrl: './add-expences.component.html',
  styleUrls: ['./add-expences.component.css']
})
export class AddExpencesComponent implements OnInit {

  expence = new Expence();
  categories=[]
  constructor(public expenceService:ExpenceService,public router:Router,public categoryService:CategoryServiceService) { }

  ngOnInit(): void {
    this.getUserCategories();
  }

  addExpence(){
    this.expenceService.addExpence(this.expence).then(res=>{
      this.router.navigateByUrl("/expences");
    })
  }

  getUserCategories(){
    this.categoryService.getAllCategory().then(res=>{
      this.categories=res
    })
  }
}
