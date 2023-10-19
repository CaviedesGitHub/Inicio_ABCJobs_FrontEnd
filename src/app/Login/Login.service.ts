import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http: HttpClient) { }
//apiUrl='http://auth.eba-brqkktps.us-east-2.elasticbeanstalk.com'+'/auth/login'
apiUrl='http://localhost:5000'+'/auth/login'

userLogIn(login: Login): Observable<any> {
  return this.http.post<any>(this.apiUrl, login);
}

}
