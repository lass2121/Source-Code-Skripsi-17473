import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputscorekelaskaprodiPage } from './inputscorekelaskaprodi.page';

describe('InputscorekelaskaprodiPage', () => {
  let component: InputscorekelaskaprodiPage;
  let fixture: ComponentFixture<InputscorekelaskaprodiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputscorekelaskaprodiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputscorekelaskaprodiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
