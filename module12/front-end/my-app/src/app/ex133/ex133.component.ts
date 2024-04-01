import { Router } from '@angular/router';
import { FashionItem } from '../../models/MyFashion';
import { Ex133Service } from '../../services/ex133.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex133',
  templateUrl: './ex133.component.html',
  styleUrl: './ex133.component.css'
})
export class Ex133Component implements OnInit{

data!: FashionItem[]
vintage!: FashionItem[]
minimalism!: FashionItem[]
errMessage:string = ""
responsiveOptions: any[] | undefined;

constructor (private ex133Service:Ex133Service, private router: Router) {

}

ngOnInit(): void {
  this.ex133Service.getAllFashions().subscribe({
    next: (data) => {
      this.data=data
      console.log(data)
    },
    error: (err) => this.errMessage = err
  })
  this.ex133Service.getFashionByStyle("Vintage").subscribe({
    next: (data) => {this.vintage = data},
    error: (err) => {this.errMessage = err}
  })
  this.ex133Service.getFashionByStyle("Minimalism").subscribe({
    next: (data) => {this.minimalism = data},
    error: (err) => {this.errMessage = err}
  })

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
}
