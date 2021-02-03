import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepagemhsPageRoutingModule } from './homepagemhs-routing.module';

import { HomepagemhsPage } from './homepagemhs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepagemhsPageRoutingModule
  ],
  declarations: [HomepagemhsPage]
})
export class HomepagemhsPageModule {}
