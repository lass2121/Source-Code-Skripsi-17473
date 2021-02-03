import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputscorebuktidosenPage } from './inputscorebuktidosen.page';

describe('InputscorebuktidosenPage', () => {
  let component: InputscorebuktidosenPage;
  let fixture: ComponentFixture<InputscorebuktidosenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputscorebuktidosenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputscorebuktidosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
