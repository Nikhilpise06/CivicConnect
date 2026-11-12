
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private apiUrl = 'http://localhost:8081/api/auth';

  constructor(private http: HttpClient) {}

  // Login API
  login(loginData: any): Observable<any> {

    return this.http.post<any>(
      `${this.apiUrl}/login`,
      loginData
    );

  }

  // Registration API
  register(user: any): Observable<any> {

    return this.http.post<any>(
      `${this.apiUrl}/register`,
      user
    );

  }

}
