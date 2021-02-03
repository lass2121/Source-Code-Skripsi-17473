import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonitoringdetailkaprodiPage } from './monitoringdetailkaprodi.page';

describe('MonitoringdetailkaprodiPage', () => {
  let component: MonitoringdetailkaprodiPage;
  let fixture: ComponentFixture<MonitoringdetailkaprodiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringdetailkaprodiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonitoringdetailkaprodiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
