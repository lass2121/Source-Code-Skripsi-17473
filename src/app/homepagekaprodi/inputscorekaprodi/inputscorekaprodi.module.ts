import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputscorekaprodiPageRoutingModule } from './inputscorekaprodi-routing.module';

import { InputscorekaprodiPage } from './inputscorekaprodi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputscorekaprodiPageRoutingModule
  ],
  declarations: [InputscorekaprodiPage]
})
export class InputscorekaprodiPageModule {}
