import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoringmhsPage } from './monitoringmhs.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoringmhsPage
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoringmhsPageRoutingModule {}
