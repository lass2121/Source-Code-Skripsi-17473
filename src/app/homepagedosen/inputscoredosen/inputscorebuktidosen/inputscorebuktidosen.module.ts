import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputscorebuktidosenPageRoutingModule } from './inputscorebuktidosen-routing.module';

import { InputscorebuktidosenPage } from './inputscorebuktidosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputscorebuktidosenPageRoutingModule
  ],
  declarations: [InputscorebuktidosenPage]
})
export class InputscorebuktidosenPageModule {}
