import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepagekaprodiPage } from './homepagekaprodi.page';

const routes: Routes = [
  {
    path: '',
    component: HomepagekaprodiPage
  },
  {
    path: 'inputmaster',
    loadChildren: () => import('./inputmaster/inputmaster.module').then( m => m.InputmasterPageModule)
  },
  {
    path: 'inputscorekaprodi',
    loadChildren: () => import('./inputscorekaprodi/inputscorekaprodi.module').then( m => m.InputscorekaprodiPageModule)
  },
  {
    path: 'monitoringkaprodi',
    loadChildren: () => import('./monitoringkaprodi/monitoringkaprodi.module').then( m => m.MonitoringkaprodiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepagekaprodiPageRoutingModule {}
