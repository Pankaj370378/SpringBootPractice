

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import baseUrl from '../user-service/userHelper';
let baseUrl = 'http://localhost:8080/user/';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createEmployee(user: Object): Observable<Object> {
    debugger;
    return this.http.post(`${baseUrl}`, user);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }
}