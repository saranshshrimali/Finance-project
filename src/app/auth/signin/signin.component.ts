import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private route:Router,public authService:AuthService) { }
                    
  ngOnInit(): void {
  }


  login(form:NgForm){
    this.authService.signin(form.value.email,form.value.password)
    }
  
}

