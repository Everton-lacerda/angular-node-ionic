import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { NgxSpinnerService } from 'ngx-spinner'

import {IResultHttp} from '../interfaces/IResultHttp'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    ) { 

  }

  public get(url: string): Promise<IResultHttp> {

    let header = this.createHeader()
     
    return new Promise((resolve) => {
      this.spinner.show()
      this.http.get(url, {headers: header}).subscribe(res => {
          this.spinner.hide()
          resolve({success: true, data: res, error: undefined})
        },
        err => {
          this.spinner.hide() 
          resolve({success: false, data: undefined, error: err})
        }
      )
    })
  }

  public post(url: string, model: any): Promise<IResultHttp> {
    let header = this.createHeader()
    this.spinner.show()
    return new Promise((resolve) => {
      this.http.post(url, model, {headers: header}).subscribe(res => {
          this.spinner.hide()
          resolve({success: true, data: res, error: undefined})
        },
        err => {
          this.spinner.hide()
          resolve({success: false, data: undefined, error: err})
        }
      )
    })
  }

  public delete(url: string): Promise<IResultHttp> {
    let header = this.createHeader()
    this.spinner.show()
    return new Promise((resolve) => {
      this.http.delete(url, {headers: header}).subscribe(res => {
          this.spinner.hide()
          resolve({success: true, data: res, error: undefined})
        },
        err => {
          this.spinner.hide()
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
