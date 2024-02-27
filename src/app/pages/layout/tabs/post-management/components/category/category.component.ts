import { Component, OnInit } from '@angular/core';
import {
  ButtonModule,
  CheckboxModule,
  IconModule,
  IconService,
  PaginationModule,
  TableItem,
  TableModule,
} from 'carbon-components-angular';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    CheckboxModule,
    IconModule,
    PaginationModule,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
  // datasetRight = [
  //   [new TableItem({ data: '1' }), new TableItem({ data: 'East Sadye' })],
  //   [new TableItem({ data: '2' }), new TableItem({ data: 'Lueilwitzview' })],
  //   [new TableItem({ data: '3' }), new TableItem({ data: 'East Arcelyside' })],
  //   [new TableItem({ data: '4' }), new TableItem({ data: 'West Dylan' })],
  //   [new TableItem({ data: '5' }), new TableItem({ data: 'Brandynberg' })],
  //   [new TableItem({ data: '6' }), new TableItem({ data: 'Stoltenbergport' })],
  //   [new TableItem({ data: '7' }), new TableItem({ data: 'Rheabury' })],
  //   [new TableItem({ data: '8' }), new TableItem({ data: 'East Arcelyside' })],
  //   [new TableItem({ data: '9' }), new TableItem({ data: 'East Arcelyside' })],
  //   [new TableItem({ data: '10' }), new TableItem({ data: 'East Arcelyside' })],
  // ];
  // dataChoose: TableItem[][] = [];
  // dataLength = this.dataset.length;
  // dataLengthPerPage = 10;
  // dataResidual = this.dataLength % this.dataLengthPerPage;
  //
  // constructor(protected iconService: IconService) {
  //   this.iconService.registerAll([Add16, Filter16]);
  // }
  overflowOnClick = (event: any) => {
    event.stopPropagation();
  };
  openDialog: boolean;
  showCloseButton: boolean;

  ngOnInit(): void {}
}
