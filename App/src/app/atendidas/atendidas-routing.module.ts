import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtendidasPage } from './atendidas.page';

const routes: Routes = [
  {
    path: '',
    component: AtendidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtendidasPageRoutingModule {}
