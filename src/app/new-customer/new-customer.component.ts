import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../models/customer.model";
import {CustomerService} from "../services/customer.service";
import {catchError, throwError} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  newCustomerFormGroup!: FormGroup;
  errorMessage!: string;
  constructor(private fg: FormBuilder, private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.newCustomerFormGroup=this.fg.group(
      {
        name : this.fg.control("",[Validators.required]),
        email : this.fg.control("", [Validators.required, Validators.email])
      }
    )
  }

  saveNewCustomer() {
    let customer:Customer=this.newCustomerFormGroup.value;
    this.customerService.saveCustomer(customer).subscribe({
      next : data=>{
        alert("Customer has been saved successfully!");
        // this.newCustomerFormGroup.reset();
        this.router.navigateByUrl("/customers");
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
