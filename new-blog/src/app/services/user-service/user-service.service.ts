import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import baseUrl from './userHelper';
// import baseUrl from '../user-service/userHelper';
let baseUrl = 'http://localhost:8080/user/';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http : HttpClient) { }
  createUser(user: Object): Observable<Object> {
    debugger;
    return this.http.post(`${baseUrl}`, user);
  }
}
