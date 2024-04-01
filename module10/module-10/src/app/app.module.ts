import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex100Component } from './ex100/ex100.component';
import { DongAService } from './services/DongA.service';
import { HttpClientModule } from '@angular/common/http';
import { Ex101Component } from './ex101/ex101.component';
import { Ex102Component } from './ex102/ex102.component';
import { Ex103Component } from './ex103/ex103.component';
import { Ex104Component } from './ex104/ex104.component';
import { Ex105Component } from './ex105/ex105.component';
import { Ex106Component } from './ex106/ex106.component';
import { Ex107Component } from './ex107/ex107.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex100Component,
    Ex101Component,
    Ex102Component,
    Ex103Component,
    Ex104Component,
    Ex105Component,
    Ex106Component,
    Ex107Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DongAService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
