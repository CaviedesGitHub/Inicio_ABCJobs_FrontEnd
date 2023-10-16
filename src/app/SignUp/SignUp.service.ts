import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  apiUrl='http://auth.eba-brqkktps.us-east-2.elasticbeanstalk.com'+'/auth/signup'

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
  constructor(private http: HttpClient) { }

}
