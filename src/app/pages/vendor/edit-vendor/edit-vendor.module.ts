import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditVendorPageRoutingModule } from './edit-vendor-routing.module';

import { EditVendorPage } from './edit-vendor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditVendorPageRoutingModule
  ],
  declarations: [EditVendorPage]
})
export class EditVendorPageModule {}
