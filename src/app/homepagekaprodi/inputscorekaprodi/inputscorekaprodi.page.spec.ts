import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputscorekaprodiPage } from './inputscorekaprodi.page';

describe('InputscorekaprodiPage', () => {
  let component: InputscorekaprodiPage;
  let fixture: ComponentFixture<InputscorekaprodiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputscorekaprodiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputscorekaprodiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
