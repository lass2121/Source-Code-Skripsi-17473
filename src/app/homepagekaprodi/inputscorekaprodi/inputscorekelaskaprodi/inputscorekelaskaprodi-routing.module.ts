import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputscorekelaskaprodiPage } from './inputscorekelaskaprodi.page';

const routes: Routes = [
  {
    path: '',
    component: InputscorekelaskaprodiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputscorekelaskaprodiPageRoutingModule {}
