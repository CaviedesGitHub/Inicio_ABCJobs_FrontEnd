import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from './Company';
import { CompanyDetail } from './Company-detail';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = environment.baseUrl + '/empresas'
  private apiEmpresas = 'http://empresas.eba-djxnu4ir.us-east-2.elasticbeanstalk.com/empresas'

  constructor(private http: HttpClient) { }

  createCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, company);
  }

  private apiEmpresaDetalle = 'http://empresas.eba-djxnu4ir.us-east-2.elasticbeanstalk.com/empresaUsuarioDetalle'
  viewDetailUserCompany(userId: number): Observable<CompanyDetail> {
    this.apiEmpresaDetalle=this.apiEmpresaDetalle+`/${userId}`
    return this.http.get<CompanyDetail>(this.apiEmpresaDetalle);
  }

}
