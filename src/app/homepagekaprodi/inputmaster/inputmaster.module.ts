import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputmasterPageRoutingModule } from './inputmaster-routing.module';

import { InputmasterPage } from './inputmaster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InputmasterPageRoutingModule
  ],
  declarations: [InputmasterPage]
})
export class InputmasterPageModule {}
