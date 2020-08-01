import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IPedidosPendentes } from 'src/app/interfaces/IPedidosPendentes';

import { CategoryService } from '../../services/category.service'

import { ICategory } from '../../interfaces/ICategory'
@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.scss']
})
export class CategorysComponent implements OnInit {
  columns: string[] = ['Nome', 'Descrição']
  dataSource: MatTableDataSource<IPedidosPendentes>;


  constructor(private categorySrv: CategoryService) { }

  async ngOnInit() {
    const categorys =  await this.categorySrv.getAll()
    this.dataSource = categorys.data.map((it: ICategory) => {
      return { name: it.name, description: it.description }
    })
  }

}
