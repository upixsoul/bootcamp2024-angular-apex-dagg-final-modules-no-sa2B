import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-images-grid',
  templateUrl: './images-grid.component.html',
  styleUrl: './images-grid.component.scss'
})
export class ImagesGridComponent {
  @Input("itemPhotos") photos!: Array<string>;
  @Input() firstPage: boolean = false;

  ngOnInit(): void {
  }
}
