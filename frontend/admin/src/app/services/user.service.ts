import { Injectable } from '@angular/core';

import {BaseService} from '../shared/base.service'
import { HttpService } from './http.service';
import { IResultHttp } from '../interfaces/IResultHttp';
import { environment } from '../../environments/environment';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService extends BaseService<any>{

  private loginSubject = new Subject<boolean>();

  constructor( 
    public http: HttpService
   ) { 
    super('user ', http)
   }

   login(email: string, password: string): Promise<IResultHttp> {
     return this.http.post(`${environment.url_api}/users/auth`, {email, password} )
   }

   configLogin(obj: any): void {
     const { token, user } = obj.data
     localStorage.setItem('admin:token', token);
     localStorage.setItem('admin:user', JSON.stringify(user));

     this.loginSubject.next(this.isStaticLogged)
   }

   get isLogged(): Observable<boolean> {
     return this.loginSubject.asObservable();
   }

   get isStaticLogged(): boolean {
    return !!localStorage.getItem('admin:token')
   }
  
}
