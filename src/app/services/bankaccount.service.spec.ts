import { TestBed } from '@angular/core/testing';

import { BankAccountService } from './bank-account.service';

describe('BankaccountService', () => {
  let service: BankAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
