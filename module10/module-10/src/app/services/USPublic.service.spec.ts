/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { USPublicService } from './USPublic.service';

describe('Service: USPublic', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [USPublicService]
    });
  });

  it('should ...', inject([USPublicService], (service: USPublicService) => {
    expect(service).toBeTruthy();
  }));
});
