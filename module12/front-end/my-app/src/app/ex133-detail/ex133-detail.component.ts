import { Component, OnInit } from '@angular/core';
import { FashionItem } from '../../models/MyFashion';
import { Ex133Service } from '../../services/ex133.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ex133-detail',
  templateUrl: './ex133-detail.component.html',
  styleUrl: './ex133-detail.component.css'
})
export class Ex133DetailComponent implements OnInit{
  selectedFashion!:FashionItem
  selectedStyle!:FashionItem[]
  responsiveOptions: any[] | undefined;

  constructor (private service: Ex133Service, private router:Router, private activateRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.service.getFashionById(id).subscribe(
          data => {
            this.selectedFashion = data,
            this.service.getFashionByStyle(data.fashion_style).subscribe({
              next: (styleData) => this.selectedStyle = styleData 
            })
          }
        )
      }
    });

   

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }];
  }

  goDetails(id:string) {
    this.router.navigate([{ outlets: { ex133: ['detail', id] } }]);
  }

  addToCart(){
    this.service.postCart(this.selectedFashion).subscribe(data => {
      console.log(data)
    })
  }
  
}
