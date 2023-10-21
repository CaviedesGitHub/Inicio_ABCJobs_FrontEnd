import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './Login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http: HttpClient) { }

private apiUrl=environment.baseUrl+'/auth/login'

userLogIn(login: Login): Observable<any> {
  return this.http.post<any>(this.apiUrl, login);
}

}

