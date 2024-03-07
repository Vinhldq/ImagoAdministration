import { Component, Input, OnInit } from '@angular/core';
import {
  ButtonModule,
  CheckboxModule,
  IconModule,
  IconService,
  ModalModule,
  PaginationModel,
  PaginationModule,
  PlaceholderModule,
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
    PlaceholderModule,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
  @Input() size = 'md';
  @Input() showSelectionColumn = true;
  @Input() enableSingleSelect = true;
  @Input() striped = true;
  @Input() isDataGrid = false;
  @Input() noData = false;
  @Input() stickyHeader = false;
  @Input() skeleton = false;

  @Input() modelPagination = new PaginationModel();
  @Input() disablePagination = false;
  @Input() pageInputDisabled = false;
  model = new TableModel();
  modelright = new TableModel();
  disabled = false;
  searchValue = '';

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
    [new TableItem({ data: '11' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '12' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '13' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '14' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '15' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '16' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '17' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '18' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '19' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '20' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '21' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '22' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '23' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '24' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '25' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '26' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '27' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '28' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '29' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '30' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '31' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '32' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '33' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '34' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '35' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '36' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '37' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '38' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '39' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '40' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '41' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '42' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '43' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '44' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '45' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '46' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '47' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '48' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '49' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '50' }), new TableItem({ data: 'East Sadye' })],
  ];
  datasetright = [
    [new TableItem({ data: '1' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '2' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '3' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '4' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '5' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '6' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '7' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '8' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '9' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '10' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '11' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '12' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '13' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '14' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '15' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '16' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '17' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '18' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '19' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '20' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '21' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '22' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '23' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '24' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '25' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '26' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '27' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '28' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '29' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '30' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '31' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '32' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '33' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '34' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '35' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '36' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '37' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '38' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '39' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '40' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '41' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '42' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '43' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '44' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '45' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '46' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '47' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '48' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '49' }), new TableItem({ data: 'East Sadye' })],
    // [new TableItem({ data: '50' }), new TableItem({ data: 'East Sadye' })],
  ];

  dataChoose: TableItem[][] = [];
  // dataChooseRight: TableItem[][] = [];
  dataLength = this.dataset.length;
  dataLengthPerPage = 8;
  dataResidual = this.dataLength % this.dataLengthPerPage;

  constructor(protected iconService: IconService) {
    this.iconService.registerAll([Add16, Filter16]);
  }

  filterNodeNames(searchString: string) {
    this.model.data = this.dataset.filter((row: TableItem[]) =>
      row[1].data.toLowerCase().includes(searchString.toLowerCase()),
    );
  }

  filterSearchName(searchString: string) {
    this.modelright.data = this.datasetright.filter((row: TableItem[]) =>
      row[1].data.toLowerCase().includes(searchString.toLowerCase()),
    );
  }

  // overflownOnClick(event: any) {
  //   event.stopPropagation();
  // }

  openDialog: boolean;
  showCloseButton: boolean;

  ngOnInit(): void {
    console.log('Data length:', this.dataLength);
    this.modelPagination.currentPage = 1;
    if (this.dataResidual === 0) {
      this.modelPagination.totalDataLength = Math.floor(
        this.dataLength / this.dataLengthPerPage,
      );
    }
    if (this.dataResidual !== 0) {
      console.log('Residual:', this.dataResidual);
      this.modelPagination.totalDataLength =
        Math.floor(this.dataLength / this.dataLengthPerPage) + 1;
      for (let i = 0; i <= this.dataResidual; i++) {
        this.dataset = [
          ...this.dataset,
          [new TableItem({ data: '' }), new TableItem({ data: '' })],
        ];
        console.log(this.dataLength);
      }
    }
    this.model.header = [
      new TableHeaderItem({
        data: 'STT',
      }),
      new TableHeaderItem({
        data: 'Category',
      }),
    ];
    for (let i: number = 0; i < this.dataLengthPerPage; i++) {
      this.dataChoose = [...this.dataChoose, this.dataset[i]];
    }
    this.model.data = this.dataChoose;

    this.modelright.header = [
      new TableHeaderItem({
        data: 'STT',
      }),
      new TableHeaderItem({
        data: 'Hashtag',
      }),
    ];
    this.modelright.data = this.datasetright;
  }

  selectPage(page) {
    console.log('loading page:', page, 'from pagination model');
    let beginGet = (page - 1) * this.dataLengthPerPage;
    let endGet = page * this.dataLengthPerPage - 1;
    this.modelPagination.currentPage = page;
    this.dataChoose = [];
    for (let i = beginGet; i <= endGet; i++) {
      this.dataChoose = [...this.dataChoose, this.dataset[i]];
    }
    this.model.data = this.dataChoose;
  }
}
