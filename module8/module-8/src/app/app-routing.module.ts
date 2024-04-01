import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './ex88/list/list.component';
import { DetailComponent } from './ex88/detail/detail.component';
import { AppComponent } from './app.component';
import { Ex86Component } from './ex86/ex86.component';
import { Ex87Component } from './ex87/ex87.component';

import { Ex89Component } from './ex89/ex89.component';
import { Ex90Component } from './ex90/ex90.component';
import { Ex91Component } from './ex91/ex91.component';
import { Ex92Component } from './ex92/ex92.component';
import { Ex93Component } from './ex93/ex93.component';

const routes: Routes = [
  
  {path:'Ex88',
  component:ListComponent},
  {path:'list-product/:id',
  component:DetailComponent},
  {path:'Ex86',
  component:Ex86Component},
  {path:'Ex87',
  component:Ex87Component},
  {path:'Ex89',
  component:Ex89Component},
  {path:'Ex90',
  component:Ex90Component},
  {path:'Ex91',
  component:Ex91Component},
  {path:'Ex92',
  component:Ex92Component},
  {path:'Ex93',
  component:Ex93Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
