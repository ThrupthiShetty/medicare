import { TestBed } from '@angular/core/testing';

import { RtcaService } from './rtca.service';

describe('RtcaService', () => {
  let service: RtcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
