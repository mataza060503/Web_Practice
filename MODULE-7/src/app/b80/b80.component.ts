import { Component } from '@angular/core';

@Component({
  selector: 'app-b80',
  templateUrl: './b80.component.html',
  styleUrl: './b80.component.css'
})
export class B80Component {
  public success="text-success"
  public error="text-error"
  public primary="text-primary"
  public normal="text-normal"
  public multiClass={
    "text-primary":true,
    "text-normal":true,
    "text-error":true
  }
  public complexity = "text-complexity"
}
