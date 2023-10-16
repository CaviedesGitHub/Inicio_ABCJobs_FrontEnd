import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUp1Component } from './SignUp1/SignUp1.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [SignUp1Component],
  exports: [SignUp1Component]
})
export class SignUpModule { }
