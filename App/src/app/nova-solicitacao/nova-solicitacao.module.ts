import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaSolicitacaoPageRoutingModule } from './nova-solicitacao-routing.module';

import { NovaSolicitacaoPage } from './nova-solicitacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaSolicitacaoPageRoutingModule
  ],
  declarations: [NovaSolicitacaoPage]
})
export class NovaSolicitacaoPageModule {}
