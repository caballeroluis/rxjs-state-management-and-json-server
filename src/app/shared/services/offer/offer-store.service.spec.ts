import { TestBed } from '@angular/core/testing';

import { OfferStoreService } from './offer-store.service';

describe('OfferStoreService', () => {
  let service: OfferStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
