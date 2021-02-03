import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitoringdosenPageRoutingModule } from './monitoringdosen-routing.module';

import { MonitoringdosenPage } from './monitoringdosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitoringdosenPageRoutingModule
  ],
  declarations: [MonitoringdosenPage]
})
export class MonitoringdosenPageModule {}
