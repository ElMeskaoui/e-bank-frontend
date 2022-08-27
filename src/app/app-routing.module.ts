import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";
import {BankAccountComponent} from "./bankaccount/bank-account.component";
import {NewBankaccountComponent} from "./new-bankaccount/new-bankaccount.component";

const routes: Routes = [
  { path : "customers", component : CustomersComponent},
  { path : "accounts", component : AccountsComponent},
  { path : "new-customer", component : NewCustomerComponent},
  { path : "bank-accounts", component : BankAccountComponent},
  { path : "new-bank-account", component : NewBankaccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
