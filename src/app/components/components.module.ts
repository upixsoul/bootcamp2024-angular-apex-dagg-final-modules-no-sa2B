import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { ProductItemsTableComponent } from './product-items-table/product-items-table.component';
import { ImagesGridComponent } from './product-item/images-grid/images-grid.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
	declarations: [
		FilterComponent,
		ProductItemComponent,
		ProductItemsTableComponent,
		ImagesGridComponent
	],
	/* NOTE: FilterComponent, PostsTableComponent, PostItemComponent need to be
	exported so other modules can see it */
	exports: [
		FilterComponent,
		ProductItemComponent,
		ProductItemsTableComponent,
		ImagesGridComponent
	],
	imports: [CommonModule],
})
export class ComponentsModule {}
