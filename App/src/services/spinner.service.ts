import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinner: HTMLIonLoadingElement = null;
  constructor(
    private loadingCtrl: LoadingController
  ) { }

  async show(message?: string): Promise<void> {
    if(this.spinner === null) {
      this.spinner =  await this.loadingCtrl.create({message: (message || 'Carregando ...')})
      await this.spinner.present()
    }
  }

  hide(): void {
    if(this.spinner !== null) { 
      this.spinner.dismiss()
      this.spinner = null
    }
  }
  

}
