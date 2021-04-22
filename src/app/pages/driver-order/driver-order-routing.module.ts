import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverOrderPage } from './driver-order.page';

const routes: Routes = [
  {
    path: '',
    component: DriverOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverOrderPageRoutingModule {}
