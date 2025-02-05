import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly url: string = '';

  constructor(
    private http: HttpClient,
  ) {
  }

  authenticate(email: string, password: string) : Promise<void> {
      return new Promise((resolve) => {});
  }

  logout() : Promise<void> {
    return new Promise((resolve) => {});
  }
}
