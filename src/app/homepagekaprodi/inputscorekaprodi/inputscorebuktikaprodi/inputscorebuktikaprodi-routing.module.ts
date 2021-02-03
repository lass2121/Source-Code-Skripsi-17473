import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputscorebuktikaprodiPage } from './inputscorebuktikaprodi.page';

const routes: Routes = [
  {
    path: '',
    component: InputscorebuktikaprodiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputscorebuktikaprodiPageRoutingModule {}
