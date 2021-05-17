import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingupadminPageRoutingModule } from './singupadmin-routing.module';

import { SingupadminPage } from './singupadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SingupadminPageRoutingModule
  ],
  declarations: [SingupadminPage]
})
export class SingupadminPageModule {}
