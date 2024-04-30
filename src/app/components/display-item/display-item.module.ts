import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayItemComponent } from './display-item.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:DisplayItemComponent
  },
  {
    path:":id",
    component:DisplayItemComponent
  }
];

@NgModule({
  declarations: [DisplayItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DisplayItemModule { }
