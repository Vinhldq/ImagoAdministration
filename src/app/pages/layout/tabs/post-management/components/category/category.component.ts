import { Component, Input, OnInit } from '@angular/core';
import {
  ButtonModule,
  CheckboxModule,
  IconModule,
  IconService,
  ModalModule,
  PaginationModule,
  TableHeaderItem,
  TableItem,
  TableModel,
  TableModule,
} from 'carbon-components-angular';
import Add16 from '@carbon/icons/es/add/16';
import Filter16 from '@carbon/icons/es/filter/16';
import { SharedModule } from '../../../../../../shared/shared.module';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    CheckboxModule,
    IconModule,
    PaginationModule,
    SharedModule,
    ModalModule,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
  @Input() size = 'md';
  @Input() showSelectionColumn = true;
  @Input() enableSingleSelect = false;
  @Input() striped = true;
  @Input() isDataGrid = false;
  @Input() noData = false;
  @Input() stickyHeader = false;
  @Input() skeleton = false;
  model = new TableModel();
  //create mew table
  modelRight = new TableModel();
  displayedCountries = ['US', 'France', 'Argentina', 'Japan'];

  dataset = [
    [new TableItem({ data: '1' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '2' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '3' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '4' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '5' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '6' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '7' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '8' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '9' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '10' }), new TableItem({ data: 'East Sadye' })],
  ];
  datacset: TableItem[][] = [];
  dataLength = this.dataset.length;
  dataLengthPerPage = 10;
  dataResidual = this.dataLength % this.dataLengthPerPage;

  constructor(protected iconService: IconService) {
    this.iconService.registerAll([Add16, Filter16]);
  }

  filterNodeNames(searchString: string) {
    this.model.data = this.dataset.filter((row: TableItem[]) =>
      row[1].data.toLowerCase().includes(searchString.toLowerCase()),
    );
  }

  overflowOnClick = (event: any) => {
    event.stopPropagation();
  };
  openDialog: boolean;
  showCloseButton: boolean;

  ngOnInit(): void {
    this.model.header = [
      new TableHeaderItem({
        data: 'STT',
      }),
      new TableHeaderItem({
        data: 'Category',
      }),
    ];
    this.model.data = this.dataset;
  }
}
