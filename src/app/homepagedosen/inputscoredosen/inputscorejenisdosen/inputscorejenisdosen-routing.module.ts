import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputscorejenisdosenPage } from './inputscorejenisdosen.page';

const routes: Routes = [
  {
    path: '',
    component: InputscorejenisdosenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputscorejenisdosenPageRoutingModule {}
