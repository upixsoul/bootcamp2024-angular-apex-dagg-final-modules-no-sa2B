import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { ProductItemsTableComponent } from './product-items-table/product-items-table.component';
import { ImagesGridComponent } from './product-item/images-grid/images-grid.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { DisplayItemComponent } from './display-item/display-item.component';

@NgModule({
	declarations: [
		FilterComponent,
		ProductItemComponent,
		ProductItemsTableComponent,
		ImagesGridComponent
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
