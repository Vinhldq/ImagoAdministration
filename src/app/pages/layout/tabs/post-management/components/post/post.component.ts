import { Component, HostBinding, Input, OnInit } from '@angular/core';
import {
  ButtonModule,
  CheckboxModule,
  DialogModule,
  IconService,
  ModalModule,
  PaginationModel,
  PlaceholderModule,
  TableHeaderItem,
  TableItem,
  TableModel,
  TableModule,
} from 'carbon-components-angular';
import Add16 from '@carbon/icons/es/add/16';
import Filter16 from '@carbon/icons/es/filter/16';
import Favoritefilled20 from '@carbon/icons/es/favorite--filled/20';
import Chat20 from '@carbon/icons/es/chat/20';
import Sendalt20 from '@carbon/icons/es/send--alt/20';
import { SharedModule } from '../../../../../../shared/shared.module';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    SharedModule,
    TableModule,
    DialogModule,
    CheckboxModule,
    ModalModule,
    PlaceholderModule,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
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
  @Input() nowrap = false;
  model = new TableModel();
  displayedTitle = ['US', 'France', 'Argentina', 'Japan'];
  searchValue = '';
  disabled = false;
  dataset = [
    [
      new TableItem({ data: '1' }),
      new TableItem({
        data: "I'm rich because took a lot of money from the team I'm rich because took a lot of money from the team I'm rich because took a lot of money from the team",
      }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'thief' }),
      new TableItem({ data: 'Quy The Accountant' }),
    ],
    [
      new TableItem({ data: '2' }),
      new TableItem({ data: 'Lueilwitzview' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '3' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '4' }),
      new TableItem({ data: 'West Dylan' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'Argentina' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '5' }),
      new TableItem({ data: 'Brandynberg' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'Japan' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '6' }),
      new TableItem({ data: 'Stoltenbergport' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'Canada' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '7' }),
      new TableItem({ data: 'Rheabury' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '8' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '9' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '10' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '11' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '12' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '13' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '14' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '15' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '16' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '17' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '18' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '19' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '20' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '21' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '22' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '23' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '24' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '25' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '26' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '27' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '28' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '29' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '30' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '31' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],

    [
      new TableItem({ data: '32' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],

    [
      new TableItem({ data: '33' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],

    [
      new TableItem({ data: '34' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '35' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '36' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '37' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '38' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '39' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '40' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '41' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '42' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '43' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '44' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '45' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '46' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '47' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '48' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '49' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '50' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '51' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
    ],
  ];
  dataChoose: TableItem[][] = [];
  dataLength = this.dataset.length;
  dataLengthPerPage = 10;
  dataResidual = this.dataLength % this.dataLengthPerPage;

  constructor(protected iconService: IconService) {
    this.iconService.registerAll([
      Sendalt20,
      Chat20,
      Add16,
      Filter16,
      Favoritefilled20,
    ]);
  }

  filterUserNames(searchString: string) {
    this.searchValue = searchString;
  }

  filterTitle(titleName: string, checked: boolean) {
    if (checked) {
      this.displayedTitle.push(titleName);
    } else {
      this.displayedTitle.splice(this.displayedTitle.indexOf(titleName), 1);
    }
  }

  overflowOnClick = (event: any) => {
    event.stopPropagation();
  };

  onRowClick(index: number) {
    console.log('Row item selected:', index);
  }

  openDialog: boolean;
  showCloseButton = true;
  openDialogShare: boolean;

  ngOnInit() {
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
          [
            new TableItem({ data: '' }),
            new TableItem({ data: '' }),
            new TableItem({ data: '' }),
            new TableItem({ data: '' }),
            new TableItem({ data: '' }),
          ],
        ];
        console.log(this.dataLength);
      }
    }
    this.model.header = [
      new TableHeaderItem({
        data: 'ID',
      }),
      new TableHeaderItem({
        data: 'Content',
      }),
      new TableHeaderItem({
        data: 'DateTime',
      }),
      new TableHeaderItem({
        data: 'Category',
      }),
      new TableHeaderItem({
        data: 'Poster',
      }),
    ];
    for (let i: number = 0; i < this.dataLengthPerPage; i++) {
      this.dataChoose = [...this.dataChoose, this.dataset[i]];
    }
    this.model.data = this.dataChoose;
  }

  selectPage(page) {
    console.log('Loading page', page, 'from pagination model');
    let beginGet = (page - 1) * this.dataLengthPerPage;
    let endGet = page * this.dataLengthPerPage - 1;
    this.modelPagination.currentPage = page;
    this.dataChoose = [];
    for (let i = beginGet; i <= endGet; i++) {
      this.dataChoose = [...this.dataChoose, this.dataset[i]];
    }
    this.model.data = this.dataChoose;
  }

  protected readonly trigger = trigger;
}
