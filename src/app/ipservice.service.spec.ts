import { TestBed } from '@angular/core/testing';

import { IPServiceService } from './ipservice.service';

describe('IPServiceService', () => {
  let service: IPServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
