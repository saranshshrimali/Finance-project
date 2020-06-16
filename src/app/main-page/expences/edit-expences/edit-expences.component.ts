import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category.service';
import { ExpenceService } from 'src/app/services/expence.service';

@Component({
  selector: 'app-edit-expences',
  templateUrl: './edit-expences.component.html',
  styleUrls: ['./edit-expences.component.css']
})
export class EditExpencesComponent implements OnInit {

  expence;
  expenceid;
  categories=[];
  constructor(public expenceService:ExpenceService,public route:ActivatedRoute,public categoryService:CategoryServiceService,public router:Router) { }

  ngOnInit(): void {
    this.expenceid=this.route.snapshot.paramMap.get("id")
    this.getExpenceId();
    this.getUserCategories();
  }

  getExpenceId(){
    this.expenceService.getExpenceById(this.expenceid).then(res=>{
      this.expence=res;
    })
  }

  getUserCategories(){
    this.categoryService.getAllCategory().then(res=>{
      this.categories=res
    })
  }

  save(){
    this.expenceService.updateExpence(this.expenceid, this.expence).then(res=>{
      this.router.navigateByUrl("/expences");
    })
  }
}
