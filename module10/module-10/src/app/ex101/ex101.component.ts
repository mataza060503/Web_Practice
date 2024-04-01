import { Component } from '@angular/core';
import { FakeProductService } from '../services/FakeProduct.service';

@Component({
  selector: 'app-ex101',
  templateUrl: './ex101.component.html',
  styleUrl: './ex101.component.css'
})
export class Ex101Component {
  data:any
  errMessage:string=''
  constructor(_service:FakeProductService){
    _service.getFakeProductData().subscribe({
      next:(data)=>{ this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
