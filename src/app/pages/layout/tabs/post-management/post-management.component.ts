import {
  Component,
  ComponentRef,
  Inject,
  Injectable,
  Injector,
  input,
  Input,
  OnInit,
  Optional,
  signal,
  ViewContainerRef,
} from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import {
  CheckboxModule,
  CloseReasons,
  Dialog,
  DialogConfig,
  DialogModule,
  DialogService,
  IconService,
  ModalModule,
  PlaceholderService,
  TableHeaderItem,
  TableItem,
  TableModel,
  TableModule,
} from 'carbon-components-angular';

import Add16 from '@carbon/icons/es/add/16';
import Filter16 from '@carbon/icons/es/filter/16';

// import { toString } from 'zone.js';

@Component({
  selector: 'app-post-management',
  standalone: true,
  imports: [
    SharedModule,
    TableModule,
    DialogModule,
    CheckboxModule,
    ModalModule,
  ],
  templateUrl: './post-management.component.html',
  styleUrl: './post-management.component.scss',
})
export class PostManagementComponent implements OnInit {
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
    [
      new TableItem({ data: '1' }),
      new TableItem({ data: 'East Sadye' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '2' }),
      new TableItem({ data: 'Lueilwitzview' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '3' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '4' }),
      new TableItem({ data: 'West Dylan' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'Argentina' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '5' }),
      new TableItem({ data: 'Brandynberg' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'Japan' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '6' }),
      new TableItem({ data: 'Stoltenbergport' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'Canada' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '7' }),
      new TableItem({ data: 'Rheabury' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
    ],
    [
      new TableItem({ data: '8' }),
      new TableItem({ data: 'East Arcelyside' }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'France' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
      new TableItem({ data: 'US' }),
    ],
  ];

  //create new data table with 2 columns modelRight
  datasetRight = [
    [new TableItem({ data: '1' }), new TableItem({ data: 'East Sadye' })],
    [new TableItem({ data: '2' }), new TableItem({ data: 'Lueilwitzview' })],
    [new TableItem({ data: '3' }), new TableItem({ data: 'East Arcelyside' })],
    [new TableItem({ data: '4' }), new TableItem({ data: 'West Dylan' })],
    [new TableItem({ data: '5' }), new TableItem({ data: 'Brandynberg' })],
    [new TableItem({ data: '6' }), new TableItem({ data: 'Stoltenbergport' })],
    [new TableItem({ data: '7' }), new TableItem({ data: 'Rheabury' })],
    [new TableItem({ data: '8' }), new TableItem({ data: 'East Arcelyside' })],
  ];

  constructor(protected iconService: IconService) {
    this.iconService.registerAll([Add16, Filter16]);
  }

  filterNodeNames(searchString: string) {
    this.model.data = this.dataset.filter((row: TableItem[]) =>
      row[1].data.toLowerCase().includes(searchString.toLowerCase()),
    );
  }

  filterNodeNamesRight(searchString: string) {
    this.modelRight.data = this.datasetRight.filter((row: TableItem[]) =>
      row[1].data.toLowerCase().includes(searchString.toLowerCase()),
    );
  }

  filterCountries(countryName: string, checked: boolean) {
    if (checked) {
      this.displayedCountries.push(countryName);
    } else {
      this.displayedCountries.splice(
        this.displayedCountries.indexOf(countryName),
        1,
      );
    }

    this.model.data = this.dataset.filter((row: TableItem[]) =>
      this.displayedCountries.includes(row[7].data),
    );
  }

  overflowOnClick = (event: any) => {
    event.stopPropagation();
  };
  openDialog: boolean;
  showCloseButton: boolean;
  openModal = signal<any | null>(null);

  ngOnInit() {
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
      new TableHeaderItem({
        data: 'Likes',
      }),
      new TableHeaderItem({
        data: 'Comments',
      }),
      new TableHeaderItem({
        data: 'Edit',
      }),
    ];
    this.modelRight.header = [
      new TableHeaderItem({
        data: 'ID',
      }),
      new TableHeaderItem({
        data: 'Category',
      }),
    ];

    this.model.data = this.dataset;
    this.modelRight.data = this.datasetRight;
  }
}
