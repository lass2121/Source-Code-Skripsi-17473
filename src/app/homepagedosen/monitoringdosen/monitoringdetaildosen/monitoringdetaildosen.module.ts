import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitoringdetaildosenPageRoutingModule } from './monitoringdetaildosen-routing.module';

import { MonitoringdetaildosenPage } from './monitoringdetaildosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitoringdetaildosenPageRoutingModule
  ],
  declarations: [MonitoringdetaildosenPage]
})
export class MonitoringdetaildosenPageModule {}
