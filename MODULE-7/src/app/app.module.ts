import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { B78Component } from './b78/b78.component';
import { B79Component } from './b79/b79.component';
import { B80Component } from './b80/b80.component';
import { B81Component } from './b81/b81.component';
import { B82Component } from './b82/b82.component';
import { B83Component } from './b83/b83.component';
import { B84Component } from './b84/b84.component';
import { B85Component } from './b85/b85.component';

@NgModule({
  declarations: [
    AppComponent,
    B78Component,
    B79Component,
    B80Component,
    B81Component,
    B82Component,
    B83Component,
    B84Component,
    B85Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
