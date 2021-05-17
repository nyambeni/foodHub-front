import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewVendorPageRoutingModule } from './view-vendor-routing.module';

import { ViewVendorPage } from './view-vendor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewVendorPageRoutingModule
  ],
  declarations: [ViewVendorPage]
})
export class ViewVendorPageModule {}
