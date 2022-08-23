import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }

}
