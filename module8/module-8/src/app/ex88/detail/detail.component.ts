import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  selectedProduct: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private _fs: ProductService, // Injecting ProductService
    private router: Router
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.selectedProduct = _fs.getProductDetail(id); // Assuming getProductDetail() fetches product details
      }
    });
  }

  goBack() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    
  }
}
