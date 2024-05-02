import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayItemComponent } from './display-item.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from "../components.module";

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
    exports: [RouterModule],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ComponentsModule
    ]
})
export class DisplayItemModule {
}
