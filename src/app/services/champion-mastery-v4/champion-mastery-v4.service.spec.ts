import { TestBed } from '@angular/core/testing';

import { ChampionMasteryV4Service } from './champion-mastery-v4.service';

describe('ChampionMasteryV4Service', () => {
  let service: ChampionMasteryV4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionMasteryV4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
