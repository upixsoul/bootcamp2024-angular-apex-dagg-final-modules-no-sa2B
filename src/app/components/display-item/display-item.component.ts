import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductItemsService } from '../../services/items.service';
import { Observable, catchError, combineLatest, map, of } from 'rxjs';
import { Item } from '../../entities/item.interface';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrl: './display-item.component.scss'
})
export class DisplayItemComponent {
  constructor(private route: ActivatedRoute, private readonly itemsService: ProductItemsService) {

  }
  
  item$: Observable<Item> = this.itemsService.itemById(this.route.params).pipe(
		catchError((error: Error): Observable<Item> => {
			console.error('❌ - Something wrong occurred: %O', error);
			return of();
		})
	);

}
