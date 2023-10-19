import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from './Company';
import { CompanyDetail } from './Company-detail';
import { ProjectDetail } from './Project-detail';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PerfilProyecto } from './Perfil-proyecto';
import { Habil } from './Habil';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = environment.baseUrl + '/empresas'
  //private apiEmpresas = 'http://empresas.eba-djxnu4ir.us-east-2.elasticbeanstalk.com/empresas'
  private apiEmpresas = 'http://localhost:5000/empresas'
  private detalleUrl=''


  constructor(private http: HttpClient) { }

  createCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.apiEmpresas, company);
  }

  createPerfil(p: PerfilProyecto, proyId: number): Observable<any> {
    this.detalleUrl='http://localhost:5000'+'/empresas/proyectos/'+`${proyId}`+'/perfilesStr'
    return this.http.post<any>(this.detalleUrl, p);
  }

  getSkills(): Observable<Habil[]> {
    return this.http.get<Habil[]>('http://localhost:5000'+'/perfiles/lstHabilidades');
  }

  //private apiEmpresaDetalle = 'http://empresas.eba-djxnu4ir.us-east-2.elasticbeanstalk.com/empresaUsuarioDetalle'
  private apiEmpresaDetalle = 'http://localhost:5000/empresaUsuarioDetalle'
  viewDetailUserCompany(userId: number): Observable<CompanyDetail> {
    this.apiEmpresaDetalle=this.apiEmpresaDetalle+`/${userId}`
    return this.http.get<CompanyDetail>(this.apiEmpresaDetalle);
  }

  viewDetailProject(proyId: number): Observable<ProjectDetail> {
    //http://localhost:5006/empresas/proyectos/1/detallePerfiles
    //this.detalleUrl='http://localhost:5000'+'/empresas/proyectos/'+`/${proyId}`+'/detallePerfiles'
    this.detalleUrl='http://localhost:5000/empresas/proyectos/1/detallePerfiles'
    return this.http.get<ProjectDetail>(this.detalleUrl);
  }

}
