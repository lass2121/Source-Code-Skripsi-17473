import { TestBed } from '@angular/core/testing';

import { InputscorekaprodiService } from './inputscorekaprodi.service';

describe('InputscorekaprodiService', () => {
  let service: InputscorekaprodiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputscorekaprodiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
