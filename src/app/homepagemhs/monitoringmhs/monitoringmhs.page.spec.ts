import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonitoringmhsPage } from './monitoringmhs.page';

describe('MonitoringmhsPage', () => {
  let component: MonitoringmhsPage;
  let fixture: ComponentFixture<MonitoringmhsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringmhsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonitoringmhsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
