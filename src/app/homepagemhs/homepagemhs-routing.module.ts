import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepagemhsPage } from './homepagemhs.page';

const routes: Routes = [
  {
    path: '',
    component: HomepagemhsPage
  },
  {
    path: 'monitoringmhs',
    loadChildren: () => import('./monitoringmhs/monitoringmhs.module').then( m => m.MonitoringmhsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepagemhsPageRoutingModule {}
