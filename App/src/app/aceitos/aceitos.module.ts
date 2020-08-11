import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AceitosPageRoutingModule } from './aceitos-routing.module';

import { AceitosPage } from './aceitos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AceitosPageRoutingModule
  ],
  declarations: [AceitosPage]
})
export class AceitosPageModule {}
