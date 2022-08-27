import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AccountService} from "../services/account.service";
import {Observable} from "rxjs";
import {AccountDetail} from "../models/account.model";

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
        amount: this.fg.control(0)
      }
    )
    this.debitFormGroup=this.fg.group(
      {
        accountId: this.fg.control(""),
        amount: this.fg.control(0)
      }
    )
    this.transferFormGroup=this.fg.group(
      {
        accountIdSource: this.fg.control(""),
        accountIdDestination: this.fg.control(""),
        amount: this.fg.control(0)
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

  }

  handleDebit() {

  }

  handleTransfer() {

  }
}
