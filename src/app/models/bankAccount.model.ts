import {Customer} from "./customer.model";

export interface BankAccountModel{
  id : string;
  type : string;
  balance : any;
  createdAt : Date;
  currency : string;
  customer : Customer;
  status : string
}
