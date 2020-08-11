import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisponiveisPageRoutingModule } from './disponiveis-routing.module';

import { DisponiveisPage } from './disponiveis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisponiveisPageRoutingModule
  ],
  declarations: [DisponiveisPage]
})
export class DisponiveisPageModule {}
