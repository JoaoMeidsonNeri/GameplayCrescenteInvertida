import { TestBed } from '@angular/core/testing';

import { AccountV1Service } from './account-v1.service';

describe('AccountV1Service', () => {
  let service: AccountV1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountV1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
