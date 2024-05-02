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
  //myId: string="";
  /*constructor(private actRoute: ActivatedRoute) {
    this.myId = this.actRoute.snapshot.params['id'];
  }*/

  constructor(private route: ActivatedRoute, private readonly itemsService: ProductItemsService) {

  }
  
  private items$: Observable<Array<Item>> = this.itemsService.items$.pipe(
		catchError((error: Error): Observable<Array<Item>> => {
			console.error('❌ - Something wrong occurred: %O', error);
			return of([]);
		})
	);

  public productItems$: Observable<Item> = combineLatest({
		route: this.route.params,
		items: this.items$,
	}).pipe(
		map(
			({
				route,
				items,
			}: {
				route: any;
				items: Array<Item>;
			}): Item => {
				let result :Item = {description : "", id: "", photos: [], prices: {}, title: "" };

        if(items.length > 0 && route["id"])
          {
            let results = items.filter(x => x.id == route["id"]);
            result = results && results.length > 0? results[0] : result;
          }
        return result;
			},
		),
	);
}
