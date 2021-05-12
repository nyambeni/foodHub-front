import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupdriverPage } from './signupdriver.page';

describe('SignupdriverPage', () => {
  let component: SignupdriverPage;
  let fixture: ComponentFixture<SignupdriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupdriverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupdriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
