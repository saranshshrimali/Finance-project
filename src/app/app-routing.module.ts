import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,  
  },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
    { path: "reset-password", component: ResetPasswordComponent },
    { path: "about", component: AboutComponent },
    { path: "category", component: AllCategoryComponent },
    { path: "add-category", component: AddCategoryComponent },
    { path: "edit-category", component: EditCategoryComponent }, 
     { path: "add-expences", component: AddExpencesComponent },
     { path: "expences", component: AllExpencesComponent },
     { path: "edit-expences", component: EditExpencesComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
