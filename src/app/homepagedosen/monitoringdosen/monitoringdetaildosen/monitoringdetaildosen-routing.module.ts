import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoringdetaildosenPage } from './monitoringdetaildosen.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoringdetaildosenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoringdetaildosenPageRoutingModule {}
