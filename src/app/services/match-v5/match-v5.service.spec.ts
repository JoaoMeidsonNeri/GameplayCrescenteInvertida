import { TestBed } from '@angular/core/testing';

import { MatchV5Service } from './match-v5.service';

describe('MatchV5Service', () => {
  let service: MatchV5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchV5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
