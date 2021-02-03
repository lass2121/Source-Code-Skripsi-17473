import { TestBed } from '@angular/core/testing';

import { InputmasterService } from './inputmaster.service';

describe('InputmasterService', () => {
  let service: InputmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
