import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { CompanyCrearComponent } from './Company/Company-crear/Company-crear.component';
import { CompanyVerComponent } from './Company/Company-ver/Company-ver.component';
import { CompanyComponent } from './Company/Company.component';
import { Login1Component } from './Login/Login1/Login1.component';
import { SignUp1Component } from './SignUp/SignUp1/SignUp1.component';
import { ProyectoVerComponent } from './Company/Proyecto-ver/Proyecto-ver.component';
import { PerflAgregarComponent } from './Company/Perfl-agregar/Perfl-agregar.component';

const routes: Routes = [
  { path: '', component: Login1Component },
  { path: 'empresa/:userId/:userToken', component: CompanyCrearComponent },
  { path: 'detalleEmpresa/:userId/:userToken', component: CompanyVerComponent },
  { path: 'detalleProyecto/:proyId/:userId/:userToken', component: ProyectoVerComponent },
  { path: 'agregarPerfil/:proyId/:userToken', component: PerflAgregarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
