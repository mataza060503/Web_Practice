/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GenderPredictService } from './GenderPredict.service';

describe('Service: GenderPredict', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenderPredictService]
    });
  });

  it('should ...', inject([GenderPredictService], (service: GenderPredictService) => {
    expect(service).toBeTruthy();
  }));
});
