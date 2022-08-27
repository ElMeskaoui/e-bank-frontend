import { Component, OnInit } from '@angular/core';
import {BankAccountService} from "../services/bank-account.service";
import {catchError, throwError} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-bankaccount',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {
  bankAccounts: any;
  errorMessage!: string;
  searchFormGroupAccounts!: FormGroup;
  constructor(private bankAccountService:BankAccountService, private fga: FormBuilder) { }

  ngOnInit(): void {
    this.searchFormGroupAccounts=this.fga.group({
      keyword: this.fga.control("")
    });
    this.bankAccounts=this.bankAccountService.getBankAccounts().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    )
  }

  searchFormCustomerBankAccounts() {

  }
}
