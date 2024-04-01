import { Component } from '@angular/core';

@Component({
  selector: 'app-b78',
  templateUrl: './b78.component.html',
  styleUrl: './b78.component.css'
})
export class B78Component {
  myVar: string = "Hello Angular";
  getMyVar(): string {
    return this.myVar;
  }
}
