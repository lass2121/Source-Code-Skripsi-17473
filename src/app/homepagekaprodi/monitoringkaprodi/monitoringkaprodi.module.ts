import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitoringkaprodiPageRoutingModule } from './monitoringkaprodi-routing.module';

import { MonitoringkaprodiPage } from './monitoringkaprodi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitoringkaprodiPageRoutingModule
  ],
  declarations: [MonitoringkaprodiPage]
})
export class MonitoringkaprodiPageModule {}
