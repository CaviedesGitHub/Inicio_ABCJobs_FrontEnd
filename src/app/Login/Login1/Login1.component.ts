import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../Login.service';
import { Login } from '../Login';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login1',
  templateUrl: './Login1.component.html',
  styleUrls: ['./Login1.component.css']
})
export class Login1Component implements OnInit {

  loginForm!: FormGroup;
  error: boolean = false;
  helper = new JwtHelperService();


  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private loginService: LoginService,
              private router: Router,
  ) { }

  loginUser(login: Login){
      this.error = false
      this.loginService.userLogIn(login).subscribe(res => {
        console.info("The Company Created: ", res.nombre)
        this.toastr.success("Confirmation", 'Company Created')
        this.loginForm.reset();

        const decodedToken = this.helper.decodeToken(res.token);
        //this.router.navigate([`/empresa/${decodedToken.sub}/${res.token}`])  OK
        this.router.navigate([`/detalleEmpresa/${decodedToken.sub}/${res.token}`])
        // si existe empoderado
        //if (res.empoderado)
        //    this.router.navigate([`/empresa/${decodedToken.sub}/${res.token}`])
        //else
        //    this.router.navigate([`/empresa/${decodedToken.sub}/${res.token}`])
        // sino
        //this.loginService.userLogIn(login)
        // si tiene
        // tal cosa
        // sino
        // se llama al otro
        },
          error => {
            this.error = true
          })
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.maxLength(20)]],
      password: ["", Validators.required]
    })
  }

}
