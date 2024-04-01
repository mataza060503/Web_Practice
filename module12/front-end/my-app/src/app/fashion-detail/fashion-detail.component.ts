import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FashionAPIService } from '../../services/FashionAPI.service';
import { Fashion } from '../../models/Fashion';

@Component({
  selector: 'app-fashion-detail',
  templateUrl: './fashion-detail.component.html',
  styleUrl: './fashion-detail.component.css'
})
export class FashionDetailComponent {
  fashion=new Fashion();
  errMessage:string=''
constructor(private _service: FashionAPIService){
}
public setFashion(f:Fashion)
{
this.fashion=f
}
onFileSelected(event:any,fashion:Fashion) {
let me = this;
let file = event.target.files[0];
let reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = function () {
fashion.fashion_image=reader.result!.toString()
};
reader.onerror = function (error) {
console.log('Error: ', error);
};
}
postFashion()
{
  console.log()
this._service.postFashion(this.fashion).subscribe({
next:(data)=>{console.log(data)},
error:(err)=>{this.errMessage=err}
})
}

putFashion() {
  this._service.putFashion(this.fashion).subscribe({
    next: (data) => {console.log(data)},
    error: (err) => {this.errMessage = err}
  })
}

deleteFashion() {
  this._service.deleteFashion(this.fashion._id).subscribe({
    next: (data) => {
      console.log(data)
    }, error: (err) => {
      this.errMessage = err
    }
  })
}
}
