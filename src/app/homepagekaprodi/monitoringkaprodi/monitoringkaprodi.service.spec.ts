import { TestBed } from '@angular/core/testing';

import { MonitoringkaprodiService } from './monitoringkaprodi.service';

describe('MonitoringkaprodiService', () => {
  let service: MonitoringkaprodiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoringkaprodiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
