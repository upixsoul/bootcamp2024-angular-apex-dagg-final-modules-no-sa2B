import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrl: './display-item.component.scss'
})
export class DisplayItemComponent {
  myId: string="";
  constructor(private actRoute: ActivatedRoute) {
    this.myId = this.actRoute.snapshot.params['id'];
  }
}
