import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SummonerV4Service } from './summoner-v4.service';

describe('SummonerV4Service', () => {
  let service: SummonerV4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SummonerV4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getSummonerByName and not throw error', () => {
    const summoner = service.getSummonerByName('Old Jão').subscribe();
    expect(summoner).toBeTruthy();
  });


});
