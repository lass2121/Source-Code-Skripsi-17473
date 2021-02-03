import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputscorejeniskaprodiPage } from './inputscorejeniskaprodi.page';

const routes: Routes = [
  {
    path: '',
    component: InputscorejeniskaprodiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputscorejeniskaprodiPageRoutingModule {}
