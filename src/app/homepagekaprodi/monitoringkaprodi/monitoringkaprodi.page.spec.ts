import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonitoringkaprodiPage } from './monitoringkaprodi.page';

describe('MonitoringkaprodiPage', () => {
  let component: MonitoringkaprodiPage;
  let fixture: ComponentFixture<MonitoringkaprodiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringkaprodiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonitoringkaprodiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
