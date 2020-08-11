import { Constants } from './../../shared/constants';
import  Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IPedidosPendentes } from 'src/app/interfaces/IPedidosPendentes';

import { CategoryService } from '../../services/category.service'

import { ICategory } from '../../interfaces/ICategory'
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.scss']
})
export class CategorysComponent implements OnInit {
  columns: string[] = ['Nome', 'Descrição', 'uid']
  dataSource: MatTableDataSource<ICategory>;
  @ViewChild(MatPaginator) paginator: MatPaginator


  constructor(private categorySrv: CategoryService) { }

  async ngOnInit() {
    const categorys = await this.categorySrv.getAll()
     this.dataSource = new MatTableDataSource(categorys.data)
    // this.bind()
  }

  async bind(): Promise<void> {
  
    // this.dataSource = new MatTableDataSource(categorys.data)
    // this.dataSource.paginator = this.paginator
    // this.dataSource = categorys.data.map((it: ICategory) => {
    //   return { name: it.name, description: it.description, uid: it.uid  }
    // })
  }

  filter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase()
  }

  async delete(category: ICategory): Promise<void> {
    const options: any = {
      ... Constants.confirm_swal_options, text: `Deseja realmente exluir a categoria ${category.name}`
    }

    const { value } = await Swal.fire(options)

    if(value) {
      const result = await this.categorySrv.delete(category.uid)
      if (result.success) {
        this.bind()
      }
    }
  }

}
