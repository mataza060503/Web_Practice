import { Component } from '@angular/core';

@Component({
  selector: 'app-b83',
  templateUrl: './b83.component.html',
  styleUrl: './b83.component.css'
})
export class B83Component {
  public name:string=''
  public address:string=''
  public email:string=''
  public phone:string=''
  setDefaultAddress(){
    this.name='Vo Hoang Lam'
    this.address='A.2204 Bcons Greeen View'
    this.email='vohoanglam060503@gmail.com'
    this.phone='0793854889'
  }
}
