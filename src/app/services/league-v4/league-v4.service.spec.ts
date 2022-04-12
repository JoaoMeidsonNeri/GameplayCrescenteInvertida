import { TestBed } from '@angular/core/testing';

import { LeagueV4Service } from './league-v4.service';

describe('LeagueV4Service', () => {
  let service: LeagueV4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeagueV4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
