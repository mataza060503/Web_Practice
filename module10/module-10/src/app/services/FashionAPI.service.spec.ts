/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FashionAPIService } from './FashionAPI.service';

describe('Service: FashionAPI', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FashionAPIService]
    });
  });

  it('should ...', inject([FashionAPIService], (service: FashionAPIService) => {
    expect(service).toBeTruthy();
  }));
});
