import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputscorejenisdosenPage } from './inputscorejenisdosen.page';

describe('InputscorejenisdosenPage', () => {
  let component: InputscorejenisdosenPage;
  let fixture: ComponentFixture<InputscorejenisdosenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputscorejenisdosenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputscorejenisdosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
