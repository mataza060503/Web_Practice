import { Component } from '@angular/core';
import { Ex125Service } from '../services/ex125.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ex125Book } from '../models/ex125';

@Component({
  selector: 'app-ex125-details',
  templateUrl: './ex125-details.component.html',
  styleUrl: './ex125-details.component.css'
})
export class Ex125DetailsComponent {
  selectedBook!: Ex125Book;

  constructor(
    private activateRoute: ActivatedRoute,
    private ex125Service: Ex125Service, // Injecting ProductService
    private router: Router
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        console.log(this.selectedBook)
        ex125Service.getBook(id).subscribe( data => {
          this.selectedBook = data
          console.log(data)
        }); // Assuming getProductDetail() fetches product details
      }
    });
  }

  back() {
    this.router.navigate([""])
  }
}
