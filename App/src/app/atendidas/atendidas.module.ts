import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtendidasPageRoutingModule } from './atendidas-routing.module';

import { AtendidasPage } from './atendidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtendidasPageRoutingModule
  ],
  declarations: [AtendidasPage]
})
export class AtendidasPageModule {}
