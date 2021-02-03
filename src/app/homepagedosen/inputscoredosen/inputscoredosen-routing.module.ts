import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputscoredosenPage } from './inputscoredosen.page';

const routes: Routes = [
  {
    path: '',
    component: InputscoredosenPage
  },
  {
    path: 'inputscorekelasdosen',
    loadChildren: () => import('./inputscorekelasdosen/inputscorekelasdosen.module').then( m => m.InputscorekelasdosenPageModule)
  },
  {
    path: 'inputscorejenisdosen',
    loadChildren: () => import('./inputscorejenisdosen/inputscorejenisdosen.module').then( m => m.InputscorejenisdosenPageModule)
  },
  {
    path: 'inputscorebuktidosen',
    loadChildren: () => import('./inputscorebuktidosen/inputscorebuktidosen.module').then( m => m.InputscorebuktidosenPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputscoredosenPageRoutingModule {}
