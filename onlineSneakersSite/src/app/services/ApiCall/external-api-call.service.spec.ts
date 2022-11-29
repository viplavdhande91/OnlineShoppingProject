import { TestBed } from '@angular/core/testing';

import { ExternalApiCallService } from './external-api-call.service';

describe('ExternalApiCallService', () => {
  let service: ExternalApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
