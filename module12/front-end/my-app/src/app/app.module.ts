import { FormsModule, FormControl, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { Ex133Component } from './ex133/ex133.component';
import { Ex133DetailComponent } from './ex133-detail/ex133-detail.component';
import { NgbModule, NgbCarousel } from '@ng-bootstrap/ng-bootstrap'
import { CarouselModule } from 'primeng/carousel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CommonModule } from '@angular/common';
import { Ex133ManageComponent } from './ex133-manage/ex133-manage.component';
import { Ex136Component } from './ex136/ex136.component';



@NgModule({
  declarations: [
    AppComponent,
    FashionComponent,
    FashionDetailComponent,
    Ex133Component,
    Ex133DetailComponent,
    Ex133ManageComponent,
    Ex136Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule, 
    NgbCarousel,
    CarouselModule,
    AutoCompleteModule,
    CommonModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
