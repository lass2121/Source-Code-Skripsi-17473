import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputscorebuktidosenPage } from './inputscorebuktidosen.page';

const routes: Routes = [
  {
    path: '',
    component: InputscorebuktidosenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputscorebuktidosenPageRoutingModule {}
