import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorPage } from './vendor.page';

const routes: Routes = [
  {
    path: '',
    component: VendorPage
  },
  {
    path: 'view-shop',
    loadChildren: () => import('./view-shop/view-shop.module').then( m => m.ViewShopPageModule)
  },
  {
    path: 'edit-shop',
    loadChildren: () => import('./edit-shop/edit-shop.module').then( m => m.EditShopPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorPageRoutingModule {}
