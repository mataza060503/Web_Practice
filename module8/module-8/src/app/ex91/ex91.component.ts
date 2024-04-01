import { Component } from '@angular/core';
import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-ex91',
  templateUrl: './ex91.component.html',
  styleUrl: './ex91.component.css'
})
export class Ex91Component {
  products!: IProduct[]

  errMessage: string = ""

  constructor(private productService: ProductService) { 
    productService.getProductsHandleError().subscribe({
      next:(data) => {this.products = data},
      error:(error) => {this.errMessage = error}
    })
  }

  ngOnInit(): void {
      
  }
}
