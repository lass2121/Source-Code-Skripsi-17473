import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputscorekelaskaprodiPageRoutingModule } from './inputscorekelaskaprodi-routing.module';

import { InputscorekelaskaprodiPage } from './inputscorekelaskaprodi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputscorekelaskaprodiPageRoutingModule
  ],
  declarations: [InputscorekelaskaprodiPage]
})
export class InputscorekelaskaprodiPageModule {}
