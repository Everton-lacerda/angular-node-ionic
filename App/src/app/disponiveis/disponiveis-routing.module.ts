import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisponiveisPage } from './disponiveis.page';

const routes: Routes = [
  {
    path: '',
    component: DisponiveisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisponiveisPageRoutingModule {}
