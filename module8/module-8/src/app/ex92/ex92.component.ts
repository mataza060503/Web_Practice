import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Customer } from '../models/product';

@Component({
  selector: 'app-ex92',
  templateUrl: './ex92.component.html',
  styleUrl: './ex92.component.css'
})
export class Ex92Component implements OnInit{

  customer!: Customer

  constructor(private customerService: ProductService) {

  }

  ngOnInit(): void {
    this.customer = this.customerService.getCustomer()
  }

}
