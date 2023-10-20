import { Component, OnInit } from '@angular/core';
import { ProjectDetail } from '../Project-detail';
import { CompanyService } from '../Company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Project } from '../Project';

@Component({
  selector: 'app-Proyecto-ver',
  templateUrl: './Proyecto-ver.component.html',
  styleUrls: ['./Proyecto-ver.component.css']
})
export class ProyectoVerComponent implements OnInit {

  proyId: number | undefined;
  token: string | undefined;
  userId: number | undefined;
  projectAny!: ProjectDetail;
  error: boolean = false;
  p!: Project;
  project!: any;


  // ,private router: ActivatedRoute
  constructor(private toastr: ToastrService,
    private companyService: CompanyService,
    private router: ActivatedRoute) { }


    verDetalleComp(){
      this.companyService.verDetalle().subscribe(res => {
        this.project=res
      })
    }

    viewDetailProject(proyId: number){
      this.p=new Project(proyId, 1, "Mi Empresa", "String");
      this.companyService.viewDetailProject(this.p).subscribe(proj=>{
        console.info("The Project was created: ", proj)
        this.toastr.success("Confirmation", `/${proj.nombre}`)
        this.project=proj
      },
      error => {
        this.error = true
      })
    }
  
    viewDetailProject2(proyId: number){
      
      this.companyService.viewDetailProject(this.p).subscribe(proj=>{
        console.info("The Project was created: ", proj)
        this.toastr.success("Confirmation", `/${proj.nombre}`)
        this.project=proj
      },
      error => {
        this.error = true
      })
    }

  ngOnInit() {
    if (!parseInt(this.router.snapshot.params.proyId) || this.router.snapshot.params.userToken === " ") {
      this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
    }
    else {
      this.proyId = parseInt(this.router.snapshot.params.proyId)
      this.userId = parseInt(this.router.snapshot.params.userId)
      this.token = this.router.snapshot.params.userToken
      //console.log("Mi Propia Consola")
      //console.log("+++++++++++++")
      //console.log("+++++++++++++")
      //console.log(this.proyId)
      //console.log("+++++++++++++")
       //console.log("+++++++++++++")
      this.toastr.success("Confirmation", `${this.proyId}`)
      //this.verDetalleComp()
      this.viewDetailProject(this.proyId)
    } 
  }
  

  showError(error: string) {
    this.toastr.error(error, "Error de autenticación")
  }

  showWarning(warning: string) {
    this.toastr.warning(warning, "Error de autenticación")
  }




}
