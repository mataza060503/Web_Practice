import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex114122Component } from './ex114-122/ex114-122.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { Ex125Component } from './ex125/ex125.component';
import { Ex125DetailsComponent } from './ex125-details/ex125-details.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex114122Component,
    FileUploadComponent,
    Ex125Component,
    Ex125DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
