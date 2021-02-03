import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomepagedosenPage } from './homepagedosen.page';

describe('HomepagedosenPage', () => {
  let component: HomepagedosenPage;
  let fixture: ComponentFixture<HomepagedosenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagedosenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomepagedosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
