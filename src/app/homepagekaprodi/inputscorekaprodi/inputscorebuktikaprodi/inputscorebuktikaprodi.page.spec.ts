import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputscorebuktikaprodiPage } from './inputscorebuktikaprodi.page';

describe('InputscorebuktikaprodiPage', () => {
  let component: InputscorebuktikaprodiPage;
  let fixture: ComponentFixture<InputscorebuktikaprodiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputscorebuktikaprodiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputscorebuktikaprodiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
