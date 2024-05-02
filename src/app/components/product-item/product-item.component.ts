import { Component, Input } from '@angular/core';
import { Item } from '../../entities/item.interface';

@Component({
	selector: 'app-product-item',
	styleUrl: './product-item.component.scss',
	templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
	@Input() public productItem!: Item;
	@Input() firstPage: boolean = false;
}
