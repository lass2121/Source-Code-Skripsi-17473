import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputmasterPage } from './inputmaster.page';

const routes: Routes = [
  {
    path: '',
    component: InputmasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputmasterPageRoutingModule {}
