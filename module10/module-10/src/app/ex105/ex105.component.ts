import { Component } from '@angular/core';
import { GenderPredictService } from '../services/GenderPredict.service';
import { GenderData } from '../models/GenderPredict';

@Component({
  selector: 'app-ex105',
  templateUrl: './ex105.component.html',
  styleUrl: './ex105.component.css'
})
export class Ex105Component {
  name: string = '';
  result: string = '';
  errorMessage: string = '';

  constructor(private genderPredictService: GenderPredictService) {}

  predict() {
    this.genderPredictService.getGenderData(this.name).subscribe({
      next: (data) => {
        this.result = data.gender;
      },
      error: (err) => {
        this.errorMessage = err.message;
      }
    });
  }
}
