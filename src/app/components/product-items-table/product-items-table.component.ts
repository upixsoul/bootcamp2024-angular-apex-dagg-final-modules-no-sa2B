import {
	catchError,
	combineLatest,
	exhaustMap,
	map,
	Observable,
	of,
	startWith,
	Subject,
} from 'rxjs';
import { Component } from '@angular/core';
import { Item } from '../../entities/item.interface';
import { ProductItemsService } from '../../services/items.service';

@Component({
	selector: 'app-product-items-table',
	styleUrl: './product-items-table.component.scss',
	templateUrl: './product-items-table.component.html',
})
export class ProductItemsTableComponent {
	private filterChangeSubject$$: Subject<string> = new Subject<string>();

	private filterChange$: Observable<string> =
		this.filterChangeSubject$$.asObservable();

	private items$: Observable<Array<Item>> = this.itemsService.items$.pipe(
		catchError((error: Error): Observable<Array<Item>> => {
			console.error('❌ - Something wrong occurred: %O', error);
			return of([]);
		})
	);

	public filteredProductItems$: Observable<Array<Item>> = combineLatest({
		filterChange: this.filterChange$.pipe(
			startWith(''),
			map((filterChangeValue: string): string =>
				filterChangeValue.toLowerCase(),
			),
		),
		items: this.items$,
	}).pipe(
		map(
			({
				filterChange,
				items,
			}: {
				filterChange: string;
				items: Array<Item>;
			}): Array<Item> => {
				return (items as Array<Item>).filter(
					(currentValue: Item): boolean =>
						currentValue.title.toLocaleLowerCase().includes(filterChange.toLocaleLowerCase()) ||
						currentValue.description.toLocaleLowerCase().includes(filterChange.toLocaleLowerCase()));
			},
		),
	);

	public constructor(private readonly itemsService: ProductItemsService) {
	}

	public filterChangeHandler(event: string): void {
		this.filterChangeSubject$$.next(event);
	}

	public clearFilterHandler(): void {
		this.filterChangeSubject$$.next('');
	}
}
