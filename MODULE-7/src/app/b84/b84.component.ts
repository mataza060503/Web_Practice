import { Component } from '@angular/core';

@Component({
  selector: 'app-b84',
  templateUrl: './b84.component.html',
  styleUrl: './b84.component.css'
})
export class B84Component {
  public result:string = "";
  public inpA:number = 0;
  public inpB:number = 0;
  public inpC:number = 0;


  solve() {
    if (this.inpA === 0) {
      this.result ="x = " + -(this.inpC)/(this.inpB)
    } if (this.inpA == 0 && this.inpB === 0) {
      this.result = "No solution"
    } else {
      var delta = ((this.inpB)**2) - (4*(this.inpA)*(this.inpC))
      if (delta < 0 ) {
        this.result = "No solution"
      } else if (delta = 0) {
        this.result = "x1=x2= " + (-(this.inpB))/(2*(this.inpA))
      } else {
        var x1 = ((-(this.inpB)) - Math.sqrt(delta))/(2*(this.inpA))
        var x2 = ((-(this.inpB)) + Math.sqrt(delta))/(2*(this.inpA))
        this.result = "x1 = "+x1 + "\n" + "x2 = "+x2
      }
    }
  }
  clear() {
    this.inpA = 0;
    this.inpB = 0;
    this.inpC = 0;
    this.result = "";
  }
}
