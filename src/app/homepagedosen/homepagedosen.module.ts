import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepagedosenPageRoutingModule } from './homepagedosen-routing.module';

import { HomepagedosenPage } from './homepagedosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepagedosenPageRoutingModule
  ],
  declarations: [HomepagedosenPage]
})
export class HomepagedosenPageModule {}
