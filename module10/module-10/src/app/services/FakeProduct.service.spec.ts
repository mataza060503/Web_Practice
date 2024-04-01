/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FakeProductService } from './FakeProduct.service';

describe('Service: FakeProduct', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeProductService]
    });
  });

  it('should ...', inject([FakeProductService], (service: FakeProductService) => {
    expect(service).toBeTruthy();
  }));
});
