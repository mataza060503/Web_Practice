import { Component } from '@angular/core';
import { DongAService } from '../services/DongA.service';

@Component({
  selector: 'app-ex100',
  templateUrl: './ex100.component.html',
  styleUrl: './ex100.component.css'
})
export class Ex100Component {
  data:any
  errMessage:string=''
  constructor(_service:DongAService){
    // _service.getDongABankData().subscribe({
    //   next:(data)=>{
    //     this.data=data
    //     console.log(this.data)
    //   },
    //   error:(err)=>{
    //     this.errMessage=err}
    //   })
    this.data = {"items":[{"type":"AUD","imageurl":"https:\/\/www.dongabank.com.vn\/images\/flag\/AUD.gif","muatienmat":"15920","muack":"16010","bantienmat":"16340","banck":"16340"},{"type":"CAD","imageurl":"https:\/\/www.dongabank.com.vn\/images\/flag\/CAD.gif","muatienmat":"17940","muack":"18050","bantienmat":"18420","banck":"18420"},{"type":"CHF","imageurl":"https:\/\/www.dongabank.com.vn\/images\/flag\/CHF.gif","muatienmat":"22610","muack":"27320","bantienmat":"23080","banck":"27910"},{"type":"CNY","imageurl":"https:\/\/www.dongabank.com.vn\/images\/flag\/CNY.gif","muatienmat":"3000","muack":"3000","bantienmat":"3250","banck":"3300"},{"type":"EUR","imageurl":"https:\/\/www.dongabank.com.vn\/images\/flag\/EUR.gif","muatienmat":"26440","muack":"26560","bantienmat":"27100","banck":"27100"},{"type":"GBP","imageurl":"https:\/\/www.dongabank.com.vn\/images\/flag\/GBP.gif","muatienmat":"30810","muack":"30950","bantienmat":"31630","banck":"31580"},{"type":"HKD","imageurl":"https:\/\/www.dongabank.com.vn\/images\/flag\/HKD.gif","muatienmat":"2410","muack":"2900","bantienmat":"3060","banck":"3210"},{"type":"JPY","imageurl":"https:\/\/www.dongabank.com.vn\/images\/flag\/JPY.gif","muatienmat":"159.1","muack":"162.3","bantienmat":"166","banck":"165.5"},{"type":"NZD","imageurl":"https:\/\/www.dongabank.com.vn\/images\/flag\/NZD.gif","muatienmat":"","muack":"14710","bantienmat":"","banck":"15140"},{"type":"PNJ_DAB","imageurl":"https:\/\/www.dongabank.com.vn\/images\/flag\/PNJ_DAB.gif","muatienmat":"6800000","muack":"6800000","bantienmat":"6930000","banck":"6930000"},{"type":"SGD","imageurl":"https:\/\/www.dongabank.com.vn\/images\/flag\/SGD.gif","muatienmat":"18070","muack":"18230","bantienmat":"18600","banck":"18600"},{"type":"THB","imageurl":"https:\/\/www.dongabank.com.vn\/images\/flag\/THB.gif","muatienmat":"610","muack":"660","bantienmat":"700","banck":"690"},{"type":"USD","imageurl":"https:\/\/www.dongabank.com.vn\/images\/flag\/USD.gif","muatienmat":"24620","muack":"24620","bantienmat":"24970","banck":"24920"},{"type":"XAU","imageurl":"https:\/\/www.dongabank.com.vn\/images\/flag\/XAU.gif","muatienmat":"7830000","muack":"7925000","bantienmat":"8020000","banck":"7925000"}]}
  } 
}
