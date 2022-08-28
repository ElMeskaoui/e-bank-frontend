import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AccountService} from "../services/account.service";
import {Observable} from "rxjs";
import {AccountDetail} from "../models/account.model";
import {Credit} from "../models/credit.model";
import {Debit} from "../models/debit.model";
import {Transfer} from "../models/transfer.model";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accountFormGroup! : FormGroup;
  creditFormGroup! : FormGroup;
  debitFormGroup! : FormGroup;
  transferFormGroup! : FormGroup;
  currentPage : number = 0;
  sizePage : number=5;
  accountObservable!: Observable<AccountDetail>;

  constructor(private fg:FormBuilder, private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountFormGroup=this.fg.group(
      {
        accountId: this.fg.control("")
      }
    )
    this.creditFormGroup=this.fg.group(
      {
        accountId: this.fg.control(""),
        amount: this.fg.control(0),
        description: this.fg.control("credit")
      }
    )
    this.debitFormGroup=this.fg.group(
      {
        accountId: this.fg.control(""),
        amount: this.fg.control(0),
        description: this.fg.control("debit")
      }
    )
    this.transferFormGroup=this.fg.group(
      {
        accountSource: this.fg.control(""),
        accountDestination: this.fg.control(""),
        amount: this.fg.control(0),
        description: this.fg.control("transfer")
      }
    )
  }

  handleSearchAccount() {
    let id : string = this.accountFormGroup.value.accountId;
    this.accountObservable=this.accountService.getAccount(id, this.currentPage, this.sizePage)
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.handleSearchAccount();
  }

  handleCredit() {
    let credit:Credit=this.creditFormGroup.value;
    this.accountService.operationCreditToAccount(credit).subscribe({
      next : data=>{
        alert("operation Credit has been saved successfully!");
        this.creditFormGroup.reset();
        this.handleSearchAccount();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  handleDebit() {
    let debit:Debit=this.debitFormGroup.value;
    this.accountService.operationDebitToAccount(debit).subscribe({
      next : data=>{
        alert("operation Debit has been saved successfully!");
        this.debitFormGroup.reset();
        this.handleSearchAccount();
      },
      error: err => {
        console.log(err);
      }
    });

  }

  handleTransfer() {
    let transfer:Transfer=this.transferFormGroup.value;
    this.accountService.operationTransferToAccount(transfer).subscribe({
      next : data=>{
        alert("operation transfer has been saved successfully!");
        this.transferFormGroup.reset();
        this.handleSearchAccount();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
