import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './Company.component';
import { CompanyCrearComponent } from './Company-crear/Company-crear.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyVerComponent } from './Company-ver/Company-ver.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [CompanyComponent, CompanyCrearComponent, CompanyVerComponent],
  exports: [CompanyComponent, CompanyCrearComponent, CompanyVerComponent]
})
export class CompanyModule { }
