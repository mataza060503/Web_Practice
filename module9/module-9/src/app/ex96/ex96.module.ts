import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    HomepageComponent
  ]
})
export class Ex96Module { }
