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
// import { getAllCategories } from '../../../../../../ngrx/category/category.actions';
import Add16 from '@carbon/icons/es/add/16';
import Filter16 from '@carbon/icons/es/filter/16';
import { SharedModule } from '../../../../../../shared/shared.module';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../../../../ngrx/auth/auth.state';
import { CategoryState } from '../../../../../../ngrx/category/category.state';
import * as CategoryAction from '../../../../../../ngrx/category/category.actions';

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
  $categoryList = this.store.select((state) => state.cate.categoryList);

  @Input() size = 'md';
  @Input() showSelectionColumn = true;
  @Input() enableSingleSelect = true;
  @Input() striped = true;
  @Input() isDataGrid = false;
  @Input() noData = false;
  @Input() stickyHeader = false;
  @Input() skeleton = false;
  @Input() model1Pagination = new PaginationModel();
  @Input() model2Pagination = new PaginationModel();
  @Input() disablePagination = false;
  @Input() pageInputDisabled = false;
  @Input() nowrap = false;
  model1 = new TableModel();
  model2 = new TableModel();
  searchValue = '';
  disabled = false;
  dataset = [];
  dataset1 = [];
  dataLengthPerPage = 10;

  constructor(
    protected iconService: IconService,
    private store: Store<{
      auth: AuthState;
      cate: CategoryState;
    }>,
  ) {
    this.iconService.registerAll([Add16, Filter16]);
  }

  filterCate(searchString: string) {
    // this.searchValue = searchString;
    this.model1.data = this.dataset.filter((row: TableItem[]) =>
      row[1].data.toLowerCase().includes(searchString.toLowerCase()),
    );
  }

  filterHashtag(hashtagName: string) {
    this.model2.data = this.dataset1.filter((row: TableItem[]) =>
      row[1].data.toLowerCase().includes(hashtagName.toLowerCase()),
    );
  }

  onRowClick(index: number) {
    console.log('Row item selected:', index);
  }

  ngOnInit() {
    this.store.select('auth').subscribe((auth) => {
      this.store.dispatch(
        CategoryAction.getAllCategories({ page: 1, token: auth.idToken }),
      );
    });
    this.$categoryList.subscribe((categoryList) => {
      this.dataset = categoryList.data.map((cate) => [
        new TableItem({
          data: cate.id,
        }),
        new TableItem({
          data: cate.name,
        }),
        new TableItem({
          data: cate.photoUrl,
        }),
      ]);
      this.model1.data = this.dataset;
    });

    this.model1.header = [
      new TableHeaderItem({
        data: 'Id Category',
      }),
      new TableHeaderItem({
        data: 'Category Name',
      }),
      new TableHeaderItem({
        data: 'photoUrl',
      }),
    ];
  }

  selectPage(page) {
    console.log('Loading page', page, 'from pagination model');
  }

  protected open = false;
  items = [
    {
      content: 'item one',
      selected: false,
    },
    {
      content: 'item two',
      selected: false,
    },
    {
      content: 'item three',
      selected: false,
    },
    {
      content: 'item four',
      selected: false,
    },
  ];
  // showCloseButton: boolean;
  showCloseButton = true;
}
