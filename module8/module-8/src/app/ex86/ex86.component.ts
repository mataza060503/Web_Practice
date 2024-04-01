import { Component } from '@angular/core';

interface Product {
  Id: string,
  Name: string,
  Price: number,
  ImagePath: string
}

@Component({
  selector: 'app-ex86',
  templateUrl: './ex86.component.html',
  styleUrl: './ex86.component.css'
})
export class Ex86Component {
  products: Product[] = [{
    Id: "123",
    Name: "Thuốc trị xàm",
    Price: 300,
    ImagePath: "./assets/coke_diet_icon.png"
  },]
}
