import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomepagemhsPage } from './homepagemhs.page';

describe('HomepagemhsPage', () => {
  let component: HomepagemhsPage;
  let fixture: ComponentFixture<HomepagemhsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagemhsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomepagemhsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
