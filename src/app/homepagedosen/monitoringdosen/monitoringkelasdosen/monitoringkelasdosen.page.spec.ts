import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonitoringkelasdosenPage } from './monitoringkelasdosen.page';

describe('MonitoringkelasdosenPage', () => {
  let component: MonitoringkelasdosenPage;
  let fixture: ComponentFixture<MonitoringkelasdosenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringkelasdosenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonitoringkelasdosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
