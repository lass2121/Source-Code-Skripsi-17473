import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputmasterPage } from './inputmaster.page';

describe('InputmasterPage', () => {
  let component: InputmasterPage;
  let fixture: ComponentFixture<InputmasterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputmasterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputmasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
