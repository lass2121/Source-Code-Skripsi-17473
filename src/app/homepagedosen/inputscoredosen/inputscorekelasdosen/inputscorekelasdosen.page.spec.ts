import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputscorekelasdosenPage } from './inputscorekelasdosen.page';

describe('InputscorekelasdosenPage', () => {
  let component: InputscorekelasdosenPage;
  let fixture: ComponentFixture<InputscorekelasdosenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputscorekelasdosenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputscorekelasdosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
