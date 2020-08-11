import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcluidosPageRoutingModule } from './concluidos-routing.module';

import { ConcluidosPage } from './concluidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcluidosPageRoutingModule
  ],
  declarations: [ConcluidosPage]
})
export class ConcluidosPageModule {}
