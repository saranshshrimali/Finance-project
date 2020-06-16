import { Component, OnInit } from '@angular/core';
import { ExpenceService } from 'src/app/services/expence.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-all-expences',
  templateUrl: './all-expences.component.html',
  styleUrls: ['./all-expences.component.css']
})
export class AllExpencesComponent implements OnInit {
  expences=[];
  totalAmount=0;
  constructor(public expenceService:ExpenceService,private router:Router) { 
    this.getItems();
  }

  ngOnInit() {
   
  }

  deleteExpence(id){
    this.expenceService.deleteExpence(id).then(res=>{
      console.log(res);
      console.log(res);
      for(var i=0; i<this.expences.length;i++){
        if(this.expences[i].id==id){
         this.expences.splice(i, 1);
        }
      }
    });
  }
getItems(){
  this.expenceService.getAllExpence().then(res=>{
  console.log(res.items)
  res.items.forEach(element => {
    this.expences.push(element);
  });
   
  this.expences.forEach(ele=>{
    this.totalAmount=this.totalAmount+ele.data.ammount
  })
      // all data in expense array you can print it by using nfor loop or foreach loop
    
  })
}
editExpence(item){
  let navigationExtras: NavigationExtras = {
    queryParams: {
      subject: JSON.stringify(item),
      
    }, skipLocationChange: true
  }
  this.router.navigate(['/edit-expences'], navigationExtras);
}
}
