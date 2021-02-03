import { TestBed } from '@angular/core/testing';

import { InputscoredosenService } from './inputscoredosen.service';

describe('InputscoredosenService', () => {
  let service: InputscoredosenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputscoredosenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
