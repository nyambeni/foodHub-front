import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperAdminPage } from './super-admin.page';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminPage
  },
  {
    path: 'edit-admin',
    loadChildren: () => import('./edit-admin/edit-admin.module').then( m => m.EditAdminPageModule)
  },
  {
    path: 'view-admin',
    loadChildren: () => import('./view-admin/view-admin.module').then( m => m.ViewAdminPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperAdminPageRoutingModule {}
