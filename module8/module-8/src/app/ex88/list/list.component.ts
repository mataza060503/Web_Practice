import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  products!: IProduct[];

  constructor(private productService: ProductService, private router:Router){
    
  }
  viewDetail(product: IProduct)
  {
    this.router.navigate(['list-product',product.ProductId])
  }

  ngOnInit(): void {
    this.products=this.productService.getProducts();
  }
}
