import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CustomerCategory } from '../models/product';

@Component({
  selector: 'app-ex93',
  templateUrl: './ex93.component.html',
  styleUrl: './ex93.component.css'
})
export class Ex93Component implements OnInit{
  customerCategory!: CustomerCategory[]

  constructor(private customerService:ProductService) {

  }

  ngOnInit(): void {
    this.customerService.getHttpCustomerCategory().subscribe((data: CustomerCategory[]) => {
      this.customerCategory = data
    })
  }
}
