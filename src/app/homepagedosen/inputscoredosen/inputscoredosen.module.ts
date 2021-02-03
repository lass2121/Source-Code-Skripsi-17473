import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputscoredosenPageRoutingModule } from './inputscoredosen-routing.module';

import { InputscoredosenPage } from './inputscoredosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputscoredosenPageRoutingModule
  ],
  declarations: [InputscoredosenPage]
})
export class InputscoredosenPageModule {}
