import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { CompanyComponent } from './Company/Company.component';
import { Login1Component } from './Login/Login1/Login1.component';
import { SignUp1Component } from './SignUp/SignUp1/SignUp1.component';

const routes: Routes = [
  { path: '', component: Login1Component },
  { path: 'empresa/:userId/:userToken', component: CompanyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
