import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepagekaprodiPageRoutingModule } from './homepagekaprodi-routing.module';

import { HomepagekaprodiPage } from './homepagekaprodi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepagekaprodiPageRoutingModule
  ],
  declarations: [HomepagekaprodiPage]
})
export class HomepagekaprodiPageModule {}
