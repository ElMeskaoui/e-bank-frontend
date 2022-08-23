import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: any;
  constructor(private http:HttpClient) { }
  public getCustomers(){
    this.http.get("http://localhost:8080/customers").subscribe({
      next: (data)=>{
        this.customers=data;
      },
      error: (error)=>{
        console.log(error);
      }
    })  }
}
