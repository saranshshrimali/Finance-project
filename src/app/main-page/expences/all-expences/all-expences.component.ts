import { Component, OnInit } from '@angular/core';
import { ExpenceService } from 'src/app/services/expence.service';

@Component({
  selector: 'app-all-expences',
  templateUrl: './all-expences.component.html',
  styleUrls: ['./all-expences.component.css']
})
export class AllExpencesComponent implements OnInit {
  expences=[]
  constructor(public expenceService:ExpenceService) { }

  ngOnInit() {
    this.expenceService.getAllExpence().then(res=>{
      this.expences=res;
    })
  }

  deleteExpence(id){
    this.expenceService.deleteExpence(id);
  }

}
