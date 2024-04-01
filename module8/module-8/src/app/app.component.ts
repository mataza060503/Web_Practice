import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title: string = "module-8"
  exs: string[] = []
  constructor(private router:Router) {

  }

  ngOnInit(): void {
    for (let i = 86; i < 94; i++) {
      var string = "Ex"+i;
      this.exs.push(string)
    }
  }

  goDetail(dir:string) {
    this.router.navigate([dir])
  }
}
