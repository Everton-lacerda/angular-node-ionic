import { SubCategoryService } from './../../services/sub-category.service';
import { SubCategoryModel } from './../../models/SubCategoryModel';
import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/models/CategoryModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-solicitacao-subcategoria',
  templateUrl: './nova-solicitacao-subcategoria.page.html',
  styleUrls: ['./nova-solicitacao-subcategoria.page.scss'],
})
export class NovaSolicitacaoSubcategoriaPage implements OnInit {

  category: CategoryModel = new CategoryModel();
  subCategory: Array<SubCategoryModel> = new Array<SubCategoryModel>();


  constructor(
    private router: Router,
    private SubCategorySrv: SubCategoryService
  ) { }

  ngOnInit() {
    try {
      this.category = this.router.getCurrentNavigation().extras.state as CategoryModel
      this.loadData()
    } catch (error) {
      this.router.navigateByUrl('/tabs')      
    }
  }

  async loadData(): Promise<void> {
    const result = await this.SubCategorySrv.getAllCategorys(this.category.uid);
    if(result.success) {
      this.subCategory = result.data as Array<SubCategoryModel>
    }
  }

}
