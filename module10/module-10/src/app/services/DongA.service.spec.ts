/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DongAService } from './DongA.service';

describe('Service: DongA', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DongAService]
    });
  });

  it('should ...', inject([DongAService], (service: DongAService) => {
    expect(service).toBeTruthy();
  }));
});
