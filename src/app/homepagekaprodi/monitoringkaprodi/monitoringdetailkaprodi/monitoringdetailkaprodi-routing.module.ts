import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoringdetailkaprodiPage } from './monitoringdetailkaprodi.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoringdetailkaprodiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoringdetailkaprodiPageRoutingModule {}
