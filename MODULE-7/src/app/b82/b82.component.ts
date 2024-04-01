import { Component } from '@angular/core';

@Component({
  selector: 'app-b82',
  templateUrl: './b82.component.html',
  styleUrl: './b82.component.css'
})
export class B82Component {
  onClick(event:any){
    alert(event.pointerId)
  }
  onSubmit(value:string){
    alert(value)
  }
  btnPlus(a:string, b:string) {
    alert("a + b = " + (parseInt(a)+parseInt(b)))
  }
  btnSubtract(a:string, b:string) {
    alert("a - b = " + (parseInt(a)-parseInt(b)))
  }
  btnDevide(a:string, b:string) {
    alert("a x b= " + (parseInt(a)/parseInt(b)))
  }
  btnMultiply(a:string, b:string) {
    alert("a ÷ b = " + (parseInt(a)*parseInt(b)))
  }
  btnReset(a:HTMLInputElement, b:HTMLInputElement) {
    a.value = "";
    b.value = "";
  }
}
