import { Injectable } from '@angular/core';
import { Offer } from '@shared/models';
import { OfferService } from '@shared/services';
import { StateStoreService } from '@core/services';

@Injectable({
  providedIn: 'root'
})
export class OfferStoreService {

  constructor(
    private offerService: OfferService,
    private stateSS: StateStoreService
  ) { }

  getOffers() {
    this.offerService.getOffers().subscribe(
      (response: Offer) => {
        this.stateSS.offers = response as Offer[];
      },
      (error: any) => {
        throw new Error(error);
      }
    );
  }

  newOffer(offer: Offer) {
    this.offerService.newOffer(offer).subscribe(
      (response: Offer) => {
        this.stateSS.offers = [
          ...this.stateSS.offers,
          response as Offer
        ];
      },
      (error: any) => {
        throw new Error(error);
      }
    );
  }

}
