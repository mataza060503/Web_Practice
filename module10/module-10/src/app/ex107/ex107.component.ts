import { Component, OnInit } from '@angular/core';
import { RandomDog } from '../models/RandomDog';
import { RandomDogService } from '../services/RandomDog.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-ex107',
  templateUrl: './ex107.component.html',
  styleUrl: './ex107.component.css'
})
export class Ex107Component implements OnInit{

  data!: RandomDog
  errMessage: string = ""

  constructor(private randomDogService: RandomDogService) {
    
  }

  ngOnInit(): void {
    this.random()
  }
  
  random() {
    this.randomDogService.getRandomDogImage().subscribe({
      next: (data) => {
        this.data= data
      }, error: (err) => {
        this.errMessage = err
      }
    })
  }

}
