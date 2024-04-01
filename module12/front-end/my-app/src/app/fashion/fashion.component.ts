import { Component } from '@angular/core';
import { FashionAPIService } from '../../services/FashionAPI.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrl: './fashion.component.css'
})
export class FashionComponent {
  fashions:any;
  errMessage:string=''
  searchInp:string = ""

constructor(public _service: FashionAPIService, private router: Router){
this._service.getFashions().subscribe({
next:(data)=>{this.fashions=data},
error:(err)=>{this.errMessage=err}
})
} 

  search() {

    this.errMessage = ""
    this._service.getFashion(this.searchInp).subscribe(data => {
      console.log(data)
      this.fashions = [data]
    })
  }
}
