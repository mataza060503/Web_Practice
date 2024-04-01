/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RandomDogService } from './RandomDog.service';

describe('Service: RandomDog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomDogService]
    });
  });

  it('should ...', inject([RandomDogService], (service: RandomDogService) => {
    expect(service).toBeTruthy();
  }));
});
