import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputscorejeniskaprodiPageRoutingModule } from './inputscorejeniskaprodi-routing.module';

import { InputscorejeniskaprodiPage } from './inputscorejeniskaprodi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputscorejeniskaprodiPageRoutingModule
  ],
  declarations: [InputscorejeniskaprodiPage]
})
export class InputscorejeniskaprodiPageModule {}
