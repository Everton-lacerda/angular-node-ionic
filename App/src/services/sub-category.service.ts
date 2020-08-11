import { environment } from './../environments/environment';
import { HttpService } from './http.service';
import { SubCategoryModel } from './../models/SubCategoryModel';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService extends BaseService<SubCategoryModel> {

  constructor(public http: HttpService) {
    super('subcategory', http)
  }

  getAllCategorys(uid: string) {
    return this.http.get(`${environment.url_api}/category/${uid}/subcategorys`)
  }

}
