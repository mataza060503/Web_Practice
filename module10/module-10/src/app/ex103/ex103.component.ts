import { Component } from '@angular/core';
import { FakeProductService } from '../services/FakeProduct.service';
import { BPIData } from '../models/BitcoinPriceIndex';
import { BitcoinPriceIndexService } from '../services/BitcoinPriceIndex.service';

@Component({
  selector: 'app-ex103',
  templateUrl: './ex103.component.html',
  styleUrl: './ex103.component.css'
})
export class Ex103Component {
  data!:any
  errMessage:string=''
  constructor(_service:BitcoinPriceIndexService){
    _service.getBPIdata().subscribe({
      next:(data)=>{ this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}