import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {AccountDetail} from "../models/account.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  public getAccount(accountId: string, page : number, size : number):Observable<AccountDetail>{
    return this.http.get<AccountDetail>(environment.backendHost+"/bankAccounts/"+accountId+"/pageOperation?page="+page+"&size="+size);
  }
  public operationCreditToAccount(accountId : string, amount: number){
    return this.http.get(environment.backendHost+"/account/credit")
  }
  public operationDebitToAccount(accountId : string, amount: number){
    return this.http.get(environment.backendHost+"/account/debit")
  }
  public operationTransferToAccount(accountSourceId: string, accountDestinationId: string, amount: number){
    return this.http.get(environment.backendHost+"/account/transfer")
  }
}
