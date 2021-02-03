import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonitoringdosenPage } from './monitoringdosen.page';

describe('MonitoringdosenPage', () => {
  let component: MonitoringdosenPage;
  let fixture: ComponentFixture<MonitoringdosenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringdosenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonitoringdosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
