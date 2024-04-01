/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Ex125Service } from './ex125.service';

describe('Service: Ex125', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ex125Service]
    });
  });

  it('should ...', inject([Ex125Service], (service: Ex125Service) => {
    expect(service).toBeTruthy();
  }));
});
