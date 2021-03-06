import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StripePage } from '../stripe/stripe.page';
describe('StripeWebPage', () => {
  let component: StripePage;
  let fixture: ComponentFixture<StripePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StripePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
