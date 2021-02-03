import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonitoringdetaildosenPage } from './monitoringdetaildosen.page';

describe('MonitoringdetaildosenPage', () => {
  let component: MonitoringdetaildosenPage;
  let fixture: ComponentFixture<MonitoringdetaildosenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringdetaildosenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonitoringdetaildosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
