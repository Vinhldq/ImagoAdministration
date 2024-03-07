<<<<<<< HEAD
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
import {SharedModule} from '../../../../shared/shared.module';
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
=======
import { Component, input, Input, OnInit, signal } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { PostComponent } from './components/post/post.component';
import { CategoryComponent } from './components/category/category.component';
import { Router } from '@angular/router';
>>>>>>> eefc7034a574266390ea376a0bf623687490f0a4

@Component({
  selector: 'app-post-management',
  standalone: true,
  imports: [SharedModule, CategoryComponent, PostComponent],
  templateUrl: './post-management.component.html',
  styleUrl: './post-management.component.scss',
})
export class PostManagementComponent implements OnInit {
  @Input() skeleton = false;
  @Input() followFocus = true;
  @Input() cacheActive = false;
  @Input() isNavigation = true;
  @Input() type = 'line';

  tabIndex = 0;

<<<<<<< HEAD
  dataset = [
    [
      new TableItem({data: '1'}),
      new TableItem({data: 'East Sadye'}),
      new TableItem({data: 'Store'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
    ],
    [
      new TableItem({data: '2'}),
      new TableItem({data: 'Lueilwitzview'}),
      new TableItem({data: 'Store'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
    ],
    [
      new TableItem({data: '3'}),
      new TableItem({data: 'East Arcelyside'}),
      new TableItem({data: 'Store'}),
      new TableItem({data: 'France'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
    ],
    [
      new TableItem({data: '4'}),
      new TableItem({data: 'West Dylan'}),
      new TableItem({data: 'Store'}),
      new TableItem({data: 'Argentina'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
    ],
    [
      new TableItem({data: '5'}),
      new TableItem({data: 'Brandynberg'}),
      new TableItem({data: 'Store'}),
      new TableItem({data: 'Japan'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
    ],
    [
      new TableItem({data: '6'}),
      new TableItem({data: 'Stoltenbergport'}),
      new TableItem({data: 'Store'}),
      new TableItem({data: 'Canada'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
    ],
    [
      new TableItem({data: '7'}),
      new TableItem({data: 'Rheabury'}),
      new TableItem({data: 'Store'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
    ],
    [
      new TableItem({data: '8'}),
      new TableItem({data: 'East Arcelyside'}),
      new TableItem({data: 'Store'}),
      new TableItem({data: 'France'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
      new TableItem({data: 'US'}),
    ],
  ];

  //create new data table with 2 columns modelRight
  datasetRight = [
    [new TableItem({data: '1'}), new TableItem({data: 'East Sadye'})],
    [new TableItem({data: '2'}), new TableItem({data: 'Lueilwitzview'})],
    [new TableItem({data: '3'}), new TableItem({data: 'East Arcelyside'})],
    [new TableItem({data: '4'}), new TableItem({data: 'West Dylan'})],
    [new TableItem({data: '5'}), new TableItem({data: 'Brandynberg'})],
    [new TableItem({data: '6'}), new TableItem({data: 'Stoltenbergport'})],
    [new TableItem({data: '7'}), new TableItem({data: 'Rheabury'})],
    [new TableItem({data: '8'}), new TableItem({data: 'East Arcelyside'})],
  ];
=======
  types = [
    {
      name: 'Post',
      route: 'post',
    },
    {
      name: 'Category',
      route: 'category',
    },
  ];

  constructor(private router: Router) {}
>>>>>>> eefc7034a574266390ea376a0bf623687490f0a4

  navigateTo(route: string, tabIndex: number) {
    this.tabIndex = tabIndex;
    this.router.navigate(['dashboard/post/', route]);
  }

<<<<<<< HEAD
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
        // data: 'ID',
      }),
      new TableHeaderItem({
        data: 'Category',
      }),
    ];

    this.model.data = this.dataset;
    this.modelRight.data = this.datasetRight;
=======
  ngOnInit(): void {
    let name = this.router.url.split('/').pop();
    let index = this.types.findIndex((item) => item.route === name);
    this.navigateTo(name, index);
>>>>>>> eefc7034a574266390ea376a0bf623687490f0a4
  }
}
