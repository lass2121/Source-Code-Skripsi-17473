import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputscoredosenPage } from './inputscoredosen.page';

describe('InputscoredosenPage', () => {
  let component: InputscoredosenPage;
  let fixture: ComponentFixture<InputscoredosenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputscoredosenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputscoredosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
