import { Component } from '@angular/core';
import { StateStoreService } from '@core/services';
import { OfferStoreService } from '@shared/services';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  constructor(
    private offerSS: OfferStoreService,
    public stateSS: StateStoreService
  ) { }

  ngAfterViewInit() {
    if (!this.stateSS.offers || this.stateSS.offers.length === 0) {
      this.offerSS.getOffers();
    }
  }

  getIdTrackFn = (i: number, item: any) => item._id;

  getOffers() {
    this.offerSS.getOffers();
  }

}
