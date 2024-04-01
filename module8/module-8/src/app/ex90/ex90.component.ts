import { ProductService } from './../services/product.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product';


@Component({
  selector: 'app-ex90',
  templateUrl: './ex90.component.html',
  styleUrl: './ex90.component.css'
})
export class Ex90Component implements OnInit{
  products!: IProduct[]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
      this.productService.getHttpProduct().subscribe((data: IProduct[]) => {
        this.products = data
      })
  }
}
