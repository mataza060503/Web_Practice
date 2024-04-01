import { Component } from '@angular/core';

interface Product {
  Id: string,
  Name: string,
  Price: number,
  ImagePath: string
}

@Component({
  selector: 'app-ex87',
  templateUrl: './ex87.component.html',
  styleUrl: './ex87.component.css'
})
export class Ex87Component {
  products: Product[] = [{
    Id: "p1",
    Name: "Coca",
    Price: 100,
    ImagePath: "./assets/coke_diet_icon.png"
  },{
    Id: 'p2',
    Name: 'Pepsi',
    Price: 300,
    ImagePath: './assets/pepsi_classic_256_icon.png'
  },{
    Id: 'p3',
    Name: '7up',
    Price: 200,
    ImagePath: './assets/7up_icon.png'
  }]
}
