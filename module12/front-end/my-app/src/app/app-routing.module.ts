import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionComponent } from './fashion/fashion.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { Ex133Component } from './ex133/ex133.component';
import { Ex133DetailComponent } from './ex133-detail/ex133-detail.component';
import { Ex133ManageComponent } from './ex133-manage/ex133-manage.component';


const routes: Routes = [
  {path:"homepage",component:Ex133Component,outlet:"ex133"},
  {path:"manage",component:Ex133ManageComponent,outlet:"ex133"},
  {path:"detail/:id",component:Ex133DetailComponent,outlet:"ex133"},
  {path:"", component: FashionComponent},
  {path:"detail/:id", component: FashionDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
