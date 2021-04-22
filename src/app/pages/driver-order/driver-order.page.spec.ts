import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverOrderPage } from './driver-order.page';

describe('DriverOrderPage', () => {
  let component: DriverOrderPage;
  let fixture: ComponentFixture<DriverOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
