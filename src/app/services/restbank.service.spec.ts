/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestbankService } from './restbank.service';

describe('RestbankService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestbankService]
    });
  });

  it('should ...', inject([RestbankService], (service: RestbankService) => {
    expect(service).toBeTruthy();
  }));
});
