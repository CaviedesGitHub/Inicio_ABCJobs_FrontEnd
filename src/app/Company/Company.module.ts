import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './Company.component';
import { CompanyCrearComponent } from './Company-crear/Company-crear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyVerComponent } from './Company-ver/Company-ver.component';
import { ProyectoVerComponent } from './Proyecto-ver/Proyecto-ver.component';
import { RouterModule } from '@angular/router';
import { PerflAgregarComponent } from './Perfl-agregar/Perfl-agregar.component';
import { PerfilEmpComponent } from './Perfil-emp/Perfil-emp.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule, FormsModule
  ],
  declarations: [CompanyComponent, CompanyCrearComponent, 
    CompanyVerComponent, ProyectoVerComponent, 
    PerflAgregarComponent, PerfilEmpComponent
  ],
  exports: [CompanyComponent, CompanyCrearComponent, 
    CompanyVerComponent, ProyectoVerComponent,
    PerflAgregarComponent, PerfilEmpComponent
  ]
})
export class CompanyModule { }
