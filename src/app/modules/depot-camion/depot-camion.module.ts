import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepotCamionPageRoutingModule } from './depot-camion-routing.module';

import { DepotCamionPage } from './depot-camion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepotCamionPageRoutingModule
  ],
  declarations: [DepotCamionPage]
})
export class DepotCamionPageModule {}
