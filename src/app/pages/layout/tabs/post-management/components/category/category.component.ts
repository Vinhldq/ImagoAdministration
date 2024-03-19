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
  @Input() modelPagination = new PaginationModel();
  @Input() disablePagination = false;
  @Input() pageInputDisabled = false;
  @Input() nowrap = false;
  model = new TableModel();
  searchValue = '';
  disabled = false;
  dataset = [];
  dataLengthPerPage = 10;
  page: number;

  constructor(
    protected iconService: IconService,
    private store: Store<{
      auth: AuthState;
      cate: CategoryState;
    }>
  ) {
    this.iconService.registerAll([Add16, Filter16]);
  }

  ngOnInit() {
    this.store.select('auth').subscribe((auth) => {
      this.store.dispatch(
        CategoryAction.getAllCategories({ page: 1, token: auth.idToken })
      );
    });
    this.$categoryList.subscribe((cateList) => {
      console.log(cateList.data);
      this.dataset = cateList.data.map((cate) => [
        new TableItem({
          data: cate.id,
        }),
        new TableItem({
          data: cate.name,
        }),
      ]);
      console.log(this.dataset);
      this.model.data = this.dataset;
      this.page = cateList.endPage;
    });

    this.model.header = [
      new TableHeaderItem({
        data: 'Id Category',
      }),
      new TableHeaderItem({
        data: 'Category Name',
      }),
    ];
  }

  filterCate(searchString: string) {
    // this.searchValue = searchString;
    this.model.data = this.dataset.filter((row: TableItem[]) =>
      row[1].data.toLowerCase().includes(searchString.toLowerCase()),
    );
  }

  onRowClick(index: number) {
    console.log('Row item selected:', index);
  }

  selectPage(page) {
    // console.log('Loading page', page, 'from pagination model');
    // let beginGet = (page - 1) * this.dataLengthPerPage;
    // let endGet = page * this.dataLengthPerPage - 1;
    // this.modelPagination.currentPage = page;
    // this.dataChoose = [];
    // for (let i = beginGet; i <= endGet; i++) {
    //   this.dataChoose = [...this.dataChoose, this.dataset[i]];
    // }
    // this.model.data = this.dataChoose;
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
}
