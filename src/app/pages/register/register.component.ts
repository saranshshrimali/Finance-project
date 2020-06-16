import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any;

  constructor(public route: Router, public fb: FormBuilder,public authService:AuthService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required])],
      "password": ['', [Validators.required, Validators.minLength(6)]],
      "confirmPassword": ['', Validators.compose([Validators.required, this.matchingPasswords('password')])],
      'PerFastion': ['', Validators.compose([Validators.required])]
    });
  }
  public matchingPasswords(field_name) {
    return (control: AbstractControl): { [key: string]: any } => {
      let input = control.value;
      let isValid = control.root.value[field_name] == input
      if (!isValid)
        return { 'equalTo': { isValid } }
      else
        return null;
    };
  }

  ngOnInit(): void {
  }
  onSubmit(val){
    console.log(val);
    this.authService.signup(val.email, val.password).then(user=>{
      if(user){
        this.route.navigate(['/home'])
      }
      else{
        console.log(user);
      }
    })
  }
    
  }

