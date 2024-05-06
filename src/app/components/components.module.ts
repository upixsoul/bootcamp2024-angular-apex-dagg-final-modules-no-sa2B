import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { ProductItemsTableComponent } from './product-items-table/product-items-table.component';
import { ImagesGridComponent } from './product-item/images-grid/images-grid.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { DisplayItemComponent } from './display-item/display-item.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MyRoundPipe } from './my-round.pipe';
import { DiscountPipe } from './discount.pipe';

@NgModule({
	declarations: [
		FilterComponent,
		ProductItemComponent,
		ProductItemsTableComponent,
		ImagesGridComponent,
  PaginationComponent,
  MyRoundPipe,
  DiscountPipe
	],
	exports: [
		FilterComponent,
		ProductItemComponent,
		ProductItemsTableComponent,
		ImagesGridComponent
	],
	imports: [CommonModule],
})
export class ComponentsModule {}
