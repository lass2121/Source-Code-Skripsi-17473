import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputscorekelasdosenPage } from './inputscorekelasdosen.page';

const routes: Routes = [
  {
    path: '',
    component: InputscorekelasdosenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputscorekelasdosenPageRoutingModule {}
