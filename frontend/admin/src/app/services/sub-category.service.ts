import { SubCategoryModel } from './../model/SubCategoryModel';
import { Injectable } from '@angular/core';
import { BaseService } from '../shared/base.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService extends BaseService<SubCategoryModel> {

  constructor(public http: HttpService ) {
    super('subcategory', http)
   }
}
