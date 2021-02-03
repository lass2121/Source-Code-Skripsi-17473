import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoringkelasdosenPage } from './monitoringkelasdosen.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoringkelasdosenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoringkelasdosenPageRoutingModule {}
