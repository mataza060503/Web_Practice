import { Datas } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-ex89',
  templateUrl: './ex89.component.html',
  styleUrl: './ex89.component.css'
})
export class Ex89Component implements OnInit {
  datas!: Datas[];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.datas = this.productService.getCategories();
  }
}
