import { Injectable } from '@angular/core';

import {BaseService} from '../shared/base.service'
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<any>{

  constructor( 
    public http: HttpService
   ) { 
    super('category ', http)
   }

  
}
