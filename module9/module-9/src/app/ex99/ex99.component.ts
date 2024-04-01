import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex99',
  templateUrl: './ex99.component.html',
  styleUrl: './ex99.component.css'
})
export class Ex99Component implements OnInit{
  inpA: number = 0
  inpAChecker: string = "right"
  inpB: number = 0
  inpBChecker: string = "right"
  inpC: number = 0
  inpCChecker: string = "right"
  result: string = ""
  resultChecker: string = ""

  constructor() {

  }

  ngOnInit(): void {
    
  }

  checkTypeA() {
    if (isNaN(+this.inpA)) {
      this.inpAChecker = "wrong"
    } else {
      this.inpAChecker = "right"
    }
  }
  checkTypeB() {
    if (isNaN(+this.inpB)) {
      this.inpBChecker = "wrong"
    } else {
      this.inpBChecker = "right"
    }
  }
  checkTypeC() {
    if (isNaN(+this.inpC)) {
      this.inpCChecker = "wrong"
    } else {
      this.inpCChecker = "right"
    }
  }

  getMaxValue(list:Array<any>) {
    var numberList = new Array<number>
    list.forEach(item => {
      console.log(typeof +item)
      if (!isNaN(+item)) {
        console.log(item)
        numberList.push(item)
      }
    });
    console.log(numberList)
    console.log(Math.max(...numberList))
    return Math.max(...numberList)
  }

  getMinValue(list:Array<any>) {
    var numberList = new Array<number>
    list.forEach(item => {
      if (!isNaN(+item)) {
        numberList.push(item)
      }
    });
    return Math.min(...numberList)
  }

  max(list:Array<number>) {
    this.result = "" + this.getMaxValue(list)
  }

  min(list:Array<number>) {
    this.result = "" + this.getMinValue(list)
  }

  sin(input:number) {
    var sin = Math.sin(input)
    if (!isNaN(sin)) {
      this.result = "" + sin
      this.resultChecker = ""
    } else {
      this.result = "biến a không hợp lệ"
      this.resultChecker = "resultWrong"
    }
  }
  cos(input:number) {
    var cos = Math.cos(input)
    if (!isNaN(cos)) {
      this.result = "" + cos
      this.resultChecker = ""
    } else {
      this.result = "biến a không hợp lệ"
      this.resultChecker = "resultWrong"
    }
  }

  power(inpA: number, inpB:number) {
    var power = Math.pow(inpA, inpB);
    this.result = "" + power
  }
}
