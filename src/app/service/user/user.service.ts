import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterRequest} from './UserRequest/register.request';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url: string = ' ';

  constructor(
    private http: HttpClient,
  ) { }

  register(param: RegisterRequest): Promise<void> {
    return new Promise((resolve, reject) => {})
  }
}
