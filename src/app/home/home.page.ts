import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  segmentValue = 'food';

  constructor() {}

  segmentChanged(ev): void {
    this.segmentValue = ev.detail.value;
  }
}
