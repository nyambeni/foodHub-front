import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupdriverPage } from './signupdriver.page';

const routes: Routes = [
  {
    path: '',
    component: SignupdriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupdriverPageRoutingModule {}
