import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface LoginResponse {
  accessToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(login: {
    username: string;
    password: string;
  }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      'http://localhost:3000/api/auth/login',
      login
    );
  }
}
