import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { User } from '../User';
import { SignUpService } from '../SignUp.service';

@Component({
  selector: 'app-SignUp1',
  templateUrl: './SignUp1.component.html',
  styleUrls: ['./SignUp1.component.css']
})
export class SignUp1Component implements OnInit {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private signupService: SignUpService){}

  createUser(user: User){
    this.signupService.createUser(user).subscribe(user=>{
      console.info("The author was created: ", user)
      this.toastr.success("Confirmation", "Author created")
      this.signupForm.reset();
    })
  }

  cancelCreation(){
    this.signupForm.reset();
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      password: ["", Validators.required],
      password2: ["", Validators.required],
      tipo: ["", Validators.required]
    })
  }

}
