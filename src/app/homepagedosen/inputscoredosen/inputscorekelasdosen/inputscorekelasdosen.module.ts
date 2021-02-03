import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputscorekelasdosenPageRoutingModule } from './inputscorekelasdosen-routing.module';

import { InputscorekelasdosenPage } from './inputscorekelasdosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputscorekelasdosenPageRoutingModule
  ],
  declarations: [InputscorekelasdosenPage]
})
export class InputscorekelasdosenPageModule {}
