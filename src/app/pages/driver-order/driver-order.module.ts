import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverOrderPageRoutingModule } from './driver-order-routing.module';

import { DriverOrderPage } from './driver-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverOrderPageRoutingModule
  ],
  declarations: [DriverOrderPage]
})
export class DriverOrderPageModule {}
