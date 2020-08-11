import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaSolicitacaoSubcategoriaPageRoutingModule } from './nova-solicitacao-subcategoria-routing.module';

import { NovaSolicitacaoSubcategoriaPage } from './nova-solicitacao-subcategoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaSolicitacaoSubcategoriaPageRoutingModule
  ],
  declarations: [NovaSolicitacaoSubcategoriaPage]
})
export class NovaSolicitacaoSubcategoriaPageModule {}
