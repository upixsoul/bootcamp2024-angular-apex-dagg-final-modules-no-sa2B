import {
	combineLatest,
	map,
	Observable,
	of,
} from 'rxjs';
import { Component, Input } from '@angular/core';
import { Item } from '../../entities/item.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {

  @Input() public productItems!: Array<Item>;
  currentPage: number = 1;
  maxPages: number = 10
  pageSize: number = 5;
  totalPages: number = 0;
  pages: Array<number> =[];

  updatePage($event: Event) {
    //this.currentPage =$event?.target;
    let htmlElement = ($event?.target as HTMLElement);
    let htmlElementValue = htmlElement.getAttribute("value");
    console.log(htmlElement);
    this.currentPage = htmlElementValue? parseInt(htmlElementValue) : this.currentPage;
  }

  filteredProductItems() : Observable<Array<Item>> {
    let result : Array<Item>= [];
    if(this.productItems && this.productItems.length)
      {
        let totalItems = this.productItems.length;
        this.totalPages = Math.ceil(totalItems / this.pageSize);

        // ensure current page isn't out of range
        if (this.currentPage < 1) {
            this.currentPage = 1;
        } else if (this.currentPage > this.totalPages) {
            this.currentPage = this.totalPages;
        }

        let startPage: number, endPage: number;
        if (this.totalPages <= this.maxPages) {
            // total pages less than max so show all pages
            startPage = 1;
            endPage = this.totalPages;
        } else {
            // total pages more than max so calculate start and end pages
            let maxPagesBeforeCurrentPage = Math.floor(this.maxPages / 2);
            let maxPagesAfterCurrentPage = Math.ceil(this.maxPages / 2) - 1;
            if (this.currentPage <= maxPagesBeforeCurrentPage) {
                // current page near the start
                startPage = 1;
                endPage = this.maxPages;
            } else if (this.currentPage + maxPagesAfterCurrentPage >= this.totalPages) {
                // current page near the end
                startPage = this.totalPages - this.maxPages + 1;
                endPage = this.totalPages;
            } else {
                // current page somewhere in the middle
                startPage = this.currentPage - maxPagesBeforeCurrentPage;
                endPage = this.currentPage + maxPagesAfterCurrentPage;
            }
        }

        // calculate start and end item indexes
        let startIndex = (this.currentPage - 1) * (this.pageSize);
        //startIndex= startIndex > 0? startIndex - 1 : startIndex;
        let endIndex = Math.min(startIndex + this.pageSize, totalItems - 1);
        endIndex = this.currentPage == this.totalPages? endIndex + 1 : endIndex;

        // create an array of pages to ng-repeat in the pager control
        this.pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

        result = (this.productItems as Array<Item>).slice(startIndex,endIndex);
        //console.log(result);
      }
      return of(result);
  }
   
}
