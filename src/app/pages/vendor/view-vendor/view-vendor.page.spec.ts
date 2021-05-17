import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewVendorPage } from './view-vendor.page';

describe('ViewVendorPage', () => {
  let component: ViewVendorPage;
  let fixture: ComponentFixture<ViewVendorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVendorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewVendorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
