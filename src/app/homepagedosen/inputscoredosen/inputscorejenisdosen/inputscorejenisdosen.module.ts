import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputscorejenisdosenPageRoutingModule } from './inputscorejenisdosen-routing.module';

import { InputscorejenisdosenPage } from './inputscorejenisdosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputscorejenisdosenPageRoutingModule
  ],
  declarations: [InputscorejenisdosenPage]
})
export class InputscorejenisdosenPageModule {}
