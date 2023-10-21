import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private apiUrl=environment.baseUrl+'/auth/signup'

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
  constructor(private http: HttpClient) { }

}
