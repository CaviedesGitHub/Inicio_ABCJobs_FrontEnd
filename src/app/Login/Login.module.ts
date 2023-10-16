import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login1Component } from './Login1/Login1.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [Login1Component],
  exports: [Login1Component]
})
export class LoginModule { }
