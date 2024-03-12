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
import { FormControl, FormGroup } from '@angular/forms';
import * as RoleActions from '../../../../../../ngrx/role/role.action';

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
    this.model.data = this.dataset.filter((row: TableItem[]) =>
      row[1].data.toLowerCase().includes(searchString.toLowerCase()),
    );
  }

  onRowClick(index: number) {
    console.log('Row item selected:', index);
  }

  ActiveOpenCUD = false;
  currentOpenCate = 1;
  selectedId: string = '';
  selectedRowData: string = '';
  numberIdCate: number = 23;

  openCUD(cate: number) {
    this.currentOpenCate = cate;
    this.ActiveOpenCUD = true;
    if (cate == 3) {
      let dataUpdate = {
        id: this.selectedId,
        name: this.dataset.find((cate) => cate[0].data == this.selectedId)[1]
          .data,
        photoUrl: this.dataset.find(
          (cate) => cate[0].data == this.selectedId,
        )[2].data,
      };
      console.log(dataUpdate);
    }
  }

  closeCUD() {
    this.ActiveOpenCUD = false;
  }

  onRowSelected(event: any) {
    if (event.selectedRowIndex !== undefined && event.selectedRowIndex > 0) {
      this.selectedId = this.selectedRowData;
    } else {
      console.log('No row selected');
    }
  }

  addForm = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl(''),
    photoUrl: new FormControl(''),
  });

  onSumitAdd() {
    let additem: TableItem[] = [
      new TableItem({ data: this.addForm.value.id }),
      new TableItem({ data: this.addForm.value.name }),
      new TableItem({ data: this.addForm.value.photoUrl }),
    ];
    this.dataset.push(additem);
    this.addForm.reset();
    this.ActiveOpenCUD = false;
  }

  editForm = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl(''),
    photoUrl: new FormControl(''),
  });

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
      this.model.data = this.dataset;
    });

    this.model.header = [
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
  showCloseButton = true;
}
