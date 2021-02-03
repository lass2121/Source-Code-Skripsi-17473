import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomepagekaprodiPage } from './homepagekaprodi.page';

describe('HomepagekaprodiPage', () => {
  let component: HomepagekaprodiPage;
  let fixture: ComponentFixture<HomepagekaprodiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagekaprodiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomepagekaprodiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
