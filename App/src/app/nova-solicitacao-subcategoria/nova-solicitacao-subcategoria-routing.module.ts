import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaSolicitacaoSubcategoriaPage } from './nova-solicitacao-subcategoria.page';

const routes: Routes = [
  {
    path: '',
    component: NovaSolicitacaoSubcategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaSolicitacaoSubcategoriaPageRoutingModule {}
