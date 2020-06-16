import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  constructor(private authservice:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onResetSubmit(formdata:NgForm){
    console.log(formdata.value.resetemail);
   this.authservice.resetpassword(formdata.value.resetemail)
    //  .then(res=>{
    //  if(res.data){
    //    alert('we send a link to your mail account please check and generate new password for login!!');
    //   // this.router.navigate(["/login"])
    //  }
    //  else{
    //   alert('ohh something went to wrong!!')
    //  }

   
  }
}
