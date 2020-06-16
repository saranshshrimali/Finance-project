import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AboutComponent } from './pages/about/about.component';
import { AllCategoryComponent } from './pages/all-category/all-category.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { AddExpencesComponent } from './pages/add-expences/add-expences.component';
import { AllExpencesComponent } from './pages/all-expences/all-expences.component';
import { EditExpencesComponent } from './pages/edit-expences/edit-expences.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [

    AppComponent,
    ResetPasswordComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    AllCategoryComponent,
    EditCategoryComponent,
    AddCategoryComponent,
    AddExpencesComponent,
    EditExpencesComponent,
    LoginComponent,
    RegisterComponent,
    AllExpencesComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule, 
    AppRoutingModule,ReactiveFormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireAuthModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
