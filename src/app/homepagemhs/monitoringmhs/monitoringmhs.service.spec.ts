import { TestBed } from '@angular/core/testing';

import { MonitoringmhsService } from './monitoringmhs.service';

describe('MonitoringmhsService', () => {
  let service: MonitoringmhsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoringmhsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
