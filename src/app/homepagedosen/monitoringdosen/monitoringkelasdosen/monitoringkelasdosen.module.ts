import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitoringkelasdosenPageRoutingModule } from './monitoringkelasdosen-routing.module';

import { MonitoringkelasdosenPage } from './monitoringkelasdosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitoringkelasdosenPageRoutingModule
  ],
  declarations: [MonitoringkelasdosenPage]
})
export class MonitoringkelasdosenPageModule {}
