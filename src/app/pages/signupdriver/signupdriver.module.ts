import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupdriverPageRoutingModule } from './signupdriver-routing.module';

import { SignupdriverPage } from './signupdriver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SignupdriverPageRoutingModule
  ],
  declarations: [SignupdriverPage]
})
export class SignupdriverPageModule {}
