/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BitcoinPriceIndexService } from './BitcoinPriceIndex.service';

describe('Service: BitcoinPriceIndex', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitcoinPriceIndexService]
    });
  });

  it('should ...', inject([BitcoinPriceIndexService], (service: BitcoinPriceIndexService) => {
    expect(service).toBeTruthy();
  }));
});
