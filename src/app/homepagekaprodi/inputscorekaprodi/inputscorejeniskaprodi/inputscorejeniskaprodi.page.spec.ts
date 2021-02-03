import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputscorejeniskaprodiPage } from './inputscorejeniskaprodi.page';

describe('InputscorejeniskaprodiPage', () => {
  let component: InputscorejeniskaprodiPage;
  let fixture: ComponentFixture<InputscorejeniskaprodiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputscorejeniskaprodiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputscorejeniskaprodiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
