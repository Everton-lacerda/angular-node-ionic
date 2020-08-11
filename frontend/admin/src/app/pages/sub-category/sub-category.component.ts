import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubCategoryService } from './../../services/sub-category.service';
import { CategoryModel } from './../../model/CategoryModel';
import { Component, OnInit } from '@angular/core';
import { SubCategoryModel } from 'src/app/model/SubCategoryModel';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {

  model:  SubCategoryModel = new SubCategoryModel()
  categorys: Array<CategoryModel>

  constructor(
    private subcategorySrv: SubCategoryService,
    private categorySrv: CategoryService,
    private matSnack: MatSnackBar,
    private router: Router,
    private active: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.active.params.subscribe(p => {
      this.getId(p.id)
    })
    this.bindCategorys()
  }

  async getId(uid: string): Promise<void> {

    if(uid === 'new') {return}

    const result = await this.subcategorySrv.getById(uid)
    console.log(result)
    this.model = result.data as SubCategoryModel
  }

  async bindCategorys(): Promise<void> {
    const result = await this.subcategorySrv.getAll()
    if(result.success) {
      this.categorys = result.data as Array<CategoryModel>
    }
  }

  async save(): Promise<void> {
    const result = await this.subcategorySrv.post(this.model)
    if(result.success) {
      this.matSnack.open('Sub Categoria salva com sucesso!', undefined, {duration: 3000})
      this.router.navigateByUrl('/subcategorys')
    }else {
      let err = result.error.error 
      Swal.fire('Atenção', err[0].message, 'warning')
    }
  }

}
