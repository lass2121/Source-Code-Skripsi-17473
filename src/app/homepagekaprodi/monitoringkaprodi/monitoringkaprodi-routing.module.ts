import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoringkaprodiPage } from './monitoringkaprodi.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoringkaprodiPage
  },
  {
    path: 'monitoringdetailkaprodi',
    loadChildren: () => import('./monitoringdetailkaprodi/monitoringdetailkaprodi.module').then( m => m.MonitoringdetailkaprodiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoringkaprodiPageRoutingModule {}
