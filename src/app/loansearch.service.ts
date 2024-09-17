import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './model/Account';

@Injectable({
  providedIn: 'root'
})
export class LoansearchService {

  constructor(private http:HttpClient) { }

  searchAccount(accountNumber:any): Observable<any>{
    //method
    //path
    // protocal
    //Headers
    // Body
   const httpHeaders = {
    headers:new HttpHeaders({
      'accountinput':accountNumber,
      'Content-Type':'application/json',
      'Accept':'application/json'
    })
   }
   return this.http.post('http://localhost:8080/api/registerUser',accountNumber,httpHeaders);
    
  }
}
