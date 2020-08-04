import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryModel } from './../../model/CategoryModel';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: CategoryModel = new CategoryModel();

  constructor(
    private categoryService: CategoryService,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private active: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.active.params.subscribe(p => {
      this.getId(p.id)
    })
  }

  async getId(uid: string): Promise<void> {
    if(uid === 'new') {return}
    const result = await this.categoryService.getById(uid)
    this.category = result.data as CategoryModel

    console.log(this.category)
  }

  async save(): Promise<void> {
    const result = await this.categoryService.post(this.category)
    if(result.success) {
      this.matSnackBar.open('Categoria salva com sucesso!', undefined, {duration: 3000})
      this.router.navigateByUrl('/categorys')
    }else {
      let err = result.error.error 
      Swal.fire('Atenção', err[0].message, 'warning')
    }
    
  }

}
