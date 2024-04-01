import { Component } from '@angular/core';
import { ApiService } from '../services/Api.service';
import { APIResponse } from '../models/Api';

@Component({
  selector: 'app-ex104',
  templateUrl: './ex104.component.html',
  styleUrl: './ex104.component.css'
})
export class Ex104Component {
  data!: APIResponse
  errMessage:string=''
  constructor(_service:ApiService){
    _service.getAPIdata().subscribe({
      next:(data)=>{ this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
