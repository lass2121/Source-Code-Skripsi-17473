import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepagedosenPage } from './homepagedosen.page';

const routes: Routes = [
  {
    path: '',
    component: HomepagedosenPage
  },
  {
    path: 'inputscoredosen',
    loadChildren: () => import('./inputscoredosen/inputscoredosen.module').then( m => m.InputscoredosenPageModule)
  },
  {
    path: 'monitoringdosen',
    loadChildren: () => import('./monitoringdosen/monitoringdosen.module').then( m => m.MonitoringdosenPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepagedosenPageRoutingModule {}
