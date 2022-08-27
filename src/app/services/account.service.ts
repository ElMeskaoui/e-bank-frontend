import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {AccountDetail} from "../models/account.model";
import {Credit} from "../models/credit.model";
import {Debit} from "../models/debit.model";
import {Transfer} from "../models/transfer.model";
import {Customer} from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  public getAccount(accountId: string, page : number, size : number):Observable<AccountDetail>{
    return this.http.get<AccountDetail>(environment.backendHost+"/bankAccounts/"+accountId+"/pageOperation?page="+page+"&size="+size);
  }
  public operationCreditToAccount(credit: Credit):Observable<Credit>{
    return this.http.post<Credit>(environment.backendHost+"/account/credit",credit)
  }
  public operationDebitToAccount(debit: Debit):Observable<Debit>{
    return this.http.post<Debit>(environment.backendHost+"/account/debit",debit)
  }
  public operationTransferToAccount(transfer: Transfer):Observable<Transfer>{
    return this.http.post<Transfer>(environment.backendHost+"/account/transfer",transfer)
  }
}
