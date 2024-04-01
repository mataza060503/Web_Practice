import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex86Component } from './ex86/ex86.component';
import { Ex87Component } from './ex87/ex87.component';
import { Ex88Module } from './ex88/ex88.module';
import { Ex89Component } from './ex89/ex89.component';
import { ProductService } from './services/product.service';
import { Ex90Component } from './ex90/ex90.component';
import { Ex91Component } from './ex91/ex91.component';
import { Ex92Component } from './ex92/ex92.component';
import { Ex93Component } from './ex93/ex93.component';


@NgModule({
  declarations: [
    AppComponent,
    Ex86Component,
    Ex87Component,
    Ex89Component,
    Ex90Component,
    Ex91Component,
    Ex92Component,
    Ex93Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ex88Module,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
