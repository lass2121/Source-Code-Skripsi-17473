import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoringdosenPage } from './monitoringdosen.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoringdosenPage
  },
  {
    path: 'monitoringkelasdosen',
    loadChildren: () => import('./monitoringkelasdosen/monitoringkelasdosen.module').then( m => m.MonitoringkelasdosenPageModule)
  },
  {
    path: 'monitoringdetaildosen',
    loadChildren: () => import('./monitoringdetaildosen/monitoringdetaildosen.module').then( m => m.MonitoringdetaildosenPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoringdosenPageRoutingModule {}
