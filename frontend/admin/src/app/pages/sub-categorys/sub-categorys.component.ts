import { SubCategoryService } from './../../services/sub-category.service';
import { MatPaginator } from '@angular/material/paginator';
import { SubCategoryModel } from './../../model/SubCategoryModel';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Constants } from 'src/app/shared/constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sub-categorys',
  templateUrl: './sub-categorys.component.html',
  styleUrls: ['./sub-categorys.component.scss']
})
export class SubCategorysComponent implements OnInit {

  columns: string[] = ['Nome', 'Descrição', 'Categoria', 'uid']
  dataSource: MatTableDataSource<SubCategoryModel>
  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(
    private subCategorySrv: SubCategoryService
  ) { }

  ngOnInit(): void {
    this.bind()
  }

  async bind(): Promise<void> {
    const subcategorys = await this.subCategorySrv.getAll()
    this.dataSource = new MatTableDataSource(subcategorys.data)
    this.dataSource.paginator = this.paginator
    // this.dataSource = categorys.data.map((it: ICategory) => {
    //   return { name: it.name, description: it.description, uid: it.uid  }
    // })
  }

  filter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase()
  }

  async delete(subcategorys: SubCategoryModel): Promise<void> {
    const options: any = {
      ... Constants.confirm_swal_options, text: `Deseja realmente exluir a sub categoria ${subcategorys.name}`
    }

    const { value } = await Swal.fire(options)

    if(value) {
      const result = await this.subCategorySrv.delete(subcategorys.uid)
      if (result.success) {
        this.bind()
      }
    }
  }

}
