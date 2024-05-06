import {
	catchError,
	combineLatest,
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
	
	private checkSubject$$: Subject<boolean> = new Subject<boolean>();

	private checkChange$: Observable<boolean> =
		this.checkSubject$$.asObservable();

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
		checkChange: this.checkChange$.pipe(
			startWith(false),
		),
		}).pipe(
			map(
				({
					filterChange,
					items,
					checkChange
				}: {
					filterChange: string;
					items: Array<Item>;
					checkChange: any
				}): Array<Item> => {
					let result = items;
					if(checkChange)
						{
							result = result.filter(x => x.offerDiscount);
						}
					return (result as Array<Item>).filter(
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

	public checkChangeHandler(event: boolean): void {
		this.checkSubject$$.next(event);
	}

	public clearFilterHandler(): void {
		this.filterChangeSubject$$.next('');
	}
}
