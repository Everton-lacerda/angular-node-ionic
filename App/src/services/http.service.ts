import { SpinnerService } from './spinner.service';
import { AlertService } from './alert.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { IResultHttp } from 'src/interfaces/IResultHttp';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private alertSrv: AlertService,
    private spinner: SpinnerService
    ) { 

  }

  public get(url: string): Promise<IResultHttp> {

    let header = this.createHeader()
     
    return new Promise( async (resolve)  => {
      await this.spinner.show()
      this.http.get(url, {headers: header}).subscribe( async res => {
          await this.spinner.hide()
          resolve({success: true, data: res, error: undefined})
        },
        async err => {
          await this.spinner.hide() 
          resolve({success: false, data: undefined, error: err})
        }
      )
    })
  }

  public async post(url: string, model: any): Promise<IResultHttp> {
    let header = this.createHeader()
    await this.alertSrv.alert('Atenção', 'Não foi possivel salvar' )
    return new Promise(async (resolve) => {
      this.http.post(url, model, {headers: header}).subscribe( async res => {
          await this.spinner.hide()
          resolve({success: true, data: res, error: undefined})
        },
        async err => {
          await this.spinner.hide()
          resolve({success: false, data: undefined, error: err})
        }
      )
    })
  }

  public async delete(url: string): Promise<IResultHttp> {
    let header = this.createHeader()
    await this.spinner.show()
    return new Promise( async (resolve) => {
      this.http.delete(url, {headers: header}).subscribe(async res => {
          await this.spinner.hide()
          resolve({success: true, data: res, error: undefined})
        },
        async err => {
          await this.spinner.hide()
          resolve({success: false, data: undefined, error: err})
        }
      )
    })
  }

  private createHeader(header?: HttpHeaders): HttpHeaders {
    if( !header ) {
      header = new HttpHeaders()
    }
    header = header.append('Content-Type', 'application/json');
    header = header.append('accept', 'application/json');

    let token: string = '';
    if( token ) {
      header = header.append('x-access-token', token);
    }

    return header
  }
}
