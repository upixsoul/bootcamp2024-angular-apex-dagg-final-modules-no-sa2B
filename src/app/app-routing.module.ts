import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductItemsTableComponent } from './components/product-items-table/product-items-table.component';

const routes: Routes = [
  {
    path: '',
    component: ProductItemsTableComponent
 },
 {
  path: 'display',
    loadChildren: () => import('../app/components/display-item/display-item.module').then(x => x.DisplayItemModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
