import { TestBed } from '@angular/core/testing';

import { MonitoringdosenService } from './monitoringdosen.service';

describe('MonitoringdosenService', () => {
  let service: MonitoringdosenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoringdosenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
