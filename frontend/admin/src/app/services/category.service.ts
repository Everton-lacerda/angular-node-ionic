import { CategoryModel } from './../model/CategoryModel';
import { Injectable } from '@angular/core';

import {BaseService} from '../shared/base.service'
import { HttpService } from './http.service';
import { ICategory } from '../interfaces/ICategory';
@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<CategoryModel>{

  constructor( 
    public http: HttpService
   ) { 
    super('category', http)
   }

  
}
