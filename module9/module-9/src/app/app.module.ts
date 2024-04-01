import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex96Module } from './ex96/ex96.module';
import { Ex97Component } from './ex97/ex97.component';
import { IonicModule } from '@ionic/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Ex99Component } from './ex99/ex99.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex97Component,
    Ex99Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ex96Module,
    FormsModule,
    IonicModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
