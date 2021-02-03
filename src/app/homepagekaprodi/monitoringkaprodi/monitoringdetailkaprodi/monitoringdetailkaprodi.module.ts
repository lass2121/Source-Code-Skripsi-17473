import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitoringdetailkaprodiPageRoutingModule } from './monitoringdetailkaprodi-routing.module';

import { MonitoringdetailkaprodiPage } from './monitoringdetailkaprodi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitoringdetailkaprodiPageRoutingModule
  ],
  declarations: [MonitoringdetailkaprodiPage]
})
export class MonitoringdetailkaprodiPageModule {}
