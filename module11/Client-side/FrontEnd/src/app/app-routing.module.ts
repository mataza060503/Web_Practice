import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex125DetailsComponent } from './ex125-details/ex125-details.component';
import { Ex125Component } from './ex125/ex125.component';

const routes: Routes = [
  {path:"detail/:id",
  component: Ex125DetailsComponent},
  {path:"",component:Ex125Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
