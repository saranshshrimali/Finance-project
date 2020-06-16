import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: any;

  constructor(public route: Router, public fb: FormBuilder,public authService:AuthService) {
    // this.form = fb.group({
    //   'email': ['', Validators.compose([Validators.required, Validators.pattern(email_pattern)])],
    //   "password": ['', [Validators.required, Validators.minLength(6)]],
    //   "confirmPassword": ['', Validators.compose([Validators.required, this.matchingPasswords('password')])],
    //   'PerFastion': ['', Validators.compose([Validators.required])]
    // });
  }
  // public matchingPasswords(field_name) {
  //   return (control: AbstractControl): { [key: string]: any } => {
  //     let input = control.value;
  //     let isValid = control.root.value[field_name] == input
  //     if (!isValid)
  //       return { 'equalTo': { isValid } }
  //     else
  //       return null;
  //   };
  // }

  ngOnInit(): void {
  }

    
  }


