import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputscorekaprodiPage } from './inputscorekaprodi.page';

const routes: Routes = [
  {
    path: '',
    component: InputscorekaprodiPage
  },
  {
    path: 'inputscorekelaskaprodi',
    loadChildren: () => import('./inputscorekelaskaprodi/inputscorekelaskaprodi.module').then( m => m.InputscorekelaskaprodiPageModule)
  },
  {
    path: 'inputscorejeniskaprodi',
    loadChildren: () => import('./inputscorejeniskaprodi/inputscorejeniskaprodi.module').then( m => m.InputscorejeniskaprodiPageModule)
  },
  {
    path: 'inputscorebuktikaprodi',
    loadChildren: () => import('./inputscorebuktikaprodi/inputscorebuktikaprodi.module').then( m => m.InputscorebuktikaprodiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputscorekaprodiPageRoutingModule {}
