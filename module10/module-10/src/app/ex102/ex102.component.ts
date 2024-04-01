import { Component } from '@angular/core';
import { FakeProductService } from '../services/FakeProduct.service';

@Component({
  selector: 'app-ex102',
  templateUrl: './ex102.component.html',
  styleUrl: './ex102.component.css'
})
export class Ex102Component {
  data:any
  errMessage:string=''
  constructor(_service:FakeProductService){
    _service.getFakeProductData().subscribe({
      next:(data)=>{ this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
