import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MonitoringmhsPageRoutingModule } from './monitoringmhs-routing.module';

import { MonitoringmhsPage } from './monitoringmhs.page';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatExpansionModule,
    MonitoringmhsPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [MonitoringmhsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MonitoringmhsPageModule {}
