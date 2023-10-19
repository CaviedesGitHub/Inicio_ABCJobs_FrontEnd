import { Component, OnInit } from '@angular/core';
import { ProjectDetail } from '../Project-detail';
import { CompanyService } from '../Company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Proyecto-ver',
  templateUrl: './Proyecto-ver.component.html',
  styleUrls: ['./Proyecto-ver.component.css']
})
export class ProyectoVerComponent implements OnInit {

  proyId: number | undefined;
  token: string | undefined;
  project!: ProjectDetail;


  constructor(private toastr: ToastrService,
    private companyService: CompanyService,
    private router: ActivatedRoute) { }

    viewDetailProject(proyId: number){
      this.companyService.viewDetailProject(proyId).subscribe(proj=>{
        console.info("The Project was created: ", proj)
        this.toastr.success("Confirmation", `/${proj.nombre}`)
        this.project=proj
      })
    }
  

  ngOnInit() {
    //if (!parseInt(this.router.snapshot.params.proyId) || this.router.snapshot.params.userToken === " ") {
    //  this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
    //}
    //else {
    //  this.proyId = parseInt(this.router.snapshot.params.proyId)
    //  this.token = this.router.snapshot.params.userToken
    //  this.viewDetailProject(this.proyId)
    //}
    this.viewDetailProject(1)
  }
  

  showError(error: string) {
    this.toastr.error(error, "Error de autenticación")
  }

  showWarning(warning: string) {
    this.toastr.warning(warning, "Error de autenticación")
  }




}
