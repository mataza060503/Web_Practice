import { Component } from '@angular/core';
import { USPublicData } from '../models/USPublicData';
import { USPublicService } from '../services/USPublic.service';

@Component({
  selector: 'app-ex106',
  templateUrl: './ex106.component.html',
  styleUrl: './ex106.component.css'
})
export class Ex106Component {
  data!: USPublicData;
  errMessage:string = ""

  constructor(private usPublicService:USPublicService) {
    usPublicService.getUSPublicData().subscribe({
      next: (data) => {
        this.data = data
        console.log(data.data[0].Nation)
        
      },
      error: (err) => {
        this.errMessage = err
      }
    })
  }
}
