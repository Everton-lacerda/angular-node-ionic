import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PedidosPendentes {
  customerName: string;
  date: string;
  category: string;
  subCategory: string;
}

const DATA_MOCK: PedidosPendentes[] = [
  {customerName: 'Everton Marques', date: '01/01/2019', category: 'Construção', subCategory: 'reforma'},
  {customerName: 'Everton Marques', date: '01/01/2019', category: 'Construção', subCategory: 'reforma'},
  {customerName: 'Everton Marques', date: '01/01/2019', category: 'Construção', subCategory: 'reforma'},
  {customerName: 'Everton Marques', date: '01/01/2019', category: 'Construção', subCategory: 'reforma'},
  {customerName: 'Everton Marques', date: '01/01/2019', category: 'Construção', subCategory: 'reforma'}
]


@Component({
  selector: 'app-pedidos-pendentes',
  templateUrl: './pedidos-pendentes.component.html',
  styleUrls: ['./pedidos-pendentes.component.scss']
})
export class PedidosPendentesComponent implements OnInit {

  columns: string[] = ['Nome', 'Data', 'Categoria', 'SubCategoria']
  dataSource: MatTableDataSource<PedidosPendentes> = new MatTableDataSource<PedidosPendentes>(DATA_MOCK)

  constructor() { }

  ngOnInit(): void {
  }

}
