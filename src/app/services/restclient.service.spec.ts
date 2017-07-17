/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestclientService } from './restclient.service';

describe('RestclientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestclientService]
    });
  });

  it('should ...', inject([RestclientService], (service: RestclientService) => {
    expect(service).toBeTruthy();
  }));
});
