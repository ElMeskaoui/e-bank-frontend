import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {


  constructor(private http:HttpClient) { }
  public getBankAccounts() : Observable<Array<any>>{
    return this.http.get<Array<any>>(environment.backendHost+"/bankAccounts")
  }

}
