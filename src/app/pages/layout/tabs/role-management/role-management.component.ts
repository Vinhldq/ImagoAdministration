import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {SharedModule} from '../../../../shared/shared.module';
import {
  IconService,
  ListItem,
  PaginationModel,
  TableHeaderItem,
  TableItem,
  TableModel,
} from 'carbon-components-angular';
import Filter20 from '@carbon/icons/es/filter/20';
import TrashCan20 from '@carbon/icons/es/trash-can/20';
import Close20 from '@carbon/icons/es/close/20';
import Edit20 from '@carbon/icons/es/edit/20';
import {AsyncPipe, NgClass} from '@angular/common';
import {RoleCategoryComponent} from './components/role-category/role-category.component';
import {FormControl, FormGroup} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {RoleState} from '../../../../ngrx/role/role.state';
import {Store} from '@ngrx/store';
import * as RoleActions from '../../../../ngrx/role/role.action';
import {Subscription} from 'rxjs';
import {AuthState} from '../../../../ngrx/auth/auth.state';

@Component({
  selector: 'app-role-management',
  standalone: true,
  imports: [
    SharedModule,
    NgClass,
    RoleCategoryComponent,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './role-management.component.html',
  styleUrl: './role-management.component.scss',
})
export class RoleManagementComponent
  implements OnInit, OnChanges, AfterViewInit {
  constructor(
    protected iconService: IconService,
    private store: Store<{ role: RoleState; auth: AuthState }>,
  ) {
    this.iconService.registerAll([Filter20, TrashCan20, Close20, Edit20]);
  }

  subscription: Subscription[] = [];

  ngOnInit(): void {
    this.subscription.push(
      this.store.select('auth', 'idToken').subscribe((token) => {
        if (token != '') {
          this.store.dispatch(
            RoleActions.getAllRole({
              token: token,
              page: 1,
            }),
          );
        }
      }),
    );
    this.roles$.subscribe((roleList) => {
      this.dataSet = roleList.data.map((role) => [
        new TableItem({
          data: role.id
        }),
        new TableItem({
          data: role.name,
        }),
        new TableItem({
          data: role.description,
        }),
      ]);
      this.model.data = this.dataSet;
      this.page = roleList.endPage;
    });

    this.model.header = [
      new TableHeaderItem({data: 'Id'}),
      new TableHeaderItem({data: 'Name'}),
      new TableHeaderItem({data: 'Describe'}),
    ];
    //
    // this.modelPagination.currentPage = 1;
    // if (this.dataResidual === 0) {
    //   this.modelPagination.totalDataLength = Math.floor(
    //     this.dataLength / this.dataLengthPerPage,
    //   );
    // }
    // if (this.dataResidual !== 0) {
    //   console.log('Residual:', this.dataResidual);
    //   this.modelPagination.totalDataLength =
    //     Math.floor(this.dataLength / this.dataLengthPerPage) + 1;
    //   for (let i = 0; i <= this.dataResidual; i++) {
    //     this.dataSet = [
    //       ...this.dataSet,
    //       [
    //         new TableItem({data: ''}),
    //         new TableItem({data: ''}),
    //         new TableItem({data: ''}),
    //       ],
    //     ];
    //   }
    // }
    //
    // for (let i = 0; i < this.dataLengthPerPage; i++) {
    //   this.dataChoose = [...this.dataChoose, this.dataSet[i]];
    // }
    //
    // this.model.data = this.dataChoose;
  }

  ngOnChanges(): void {
  }

  ngAfterViewInit() {
  }

  roles$ = this.store.select((state) => state.role.roleList);
  loading$ = this.store.select((state) => state.role.isGetAllRole);
  error$ = this.store.select((state) => state.role.getAllRoleErrorMessage);

  @Input() model = new TableModel();
  disabled = false;
  @Input() size = 'md';
  @Input() showSelectionColumn = true;
  @Input() enableSingleSelect = true;
  @Input() striped = false;
  @Input() sortable = false;
  @Input() isDataGrid = false;
  @Input() noData = false;
  @Input() stickyHeader = false;
  @Input() skeleton = false;
  @Input() ariaLabelledby = 'table';
  @Input() ariaDescribedby = 'desc';
  @Input() invalid = true;
  @Input() placeholder = 'Content';
  @Input() invalidText = '';
  @Input() dropUp = false;
  @Input() warn = false;
  @Input() theme = 'dark';
  @Input() warnText = 'This is a warning';

  @Input() modelPagination = new PaginationModel();
  @Input() disabledPagination = false;
  @Input() pageInputDisabled = false;

  @ViewChild('overflowMenuItemTemplate', {static: false})
  protected overflowMenuItemTemplate: TemplateRef<any> | undefined;
  @ViewChild('overflowMenuItemTemplateRemove', {static: false})
  protected overflowMenuItemTemplateRemove: TemplateRef<any> | undefined;
  @ViewChild('overflowMenuItemTemplateEdit', {static: false})
  protected overflowMenuItemTemplateEdit: TemplateRef<any> | undefined;

  page: number;
  dataSet = [
    //   [
    //     new TableItem({data: " 1"}),
    //     new TableItem({data: "User"}),
    //     new TableItem({data: "Role User"}),
    //   ],
    //   [
    //     new TableItem({data: " 2"}),
    //     new TableItem({data: "Admin"}),
    //     new TableItem({data: "Role Admin"}),
    //   ],
  ];

  filterNodeNames(searchString: string) {
    // this.model.data = this.dataSet
    //   .filter((row: TableItem[]) => row[1].data.toLowerCase().includes(searchString.toLowerCase()));
  }

  selectPage(page: number) {
    // let beginGet = (page - 1) * this.dataLengthPerPage;
    // let endGet = page * this.dataLengthPerPage - 1;
    // this.modelPagination.currentPage = page;
    // this.dataChoose = [];
    // // if (endGet > this.dataLength) {
    // //   endGet = this.dataLength - 1;
    // // }
    // for (let i = beginGet; i <= endGet; i++) {
    //   // this.dataChoose = [...this.dataChoose, this.dataSet[i]];
    // }
    // this.model.data = this.dataChoose;
  }

  isActiveOpenCUD: boolean = false;
  currentOpenRole = 1;

  openCUD(role: number) {
    this.currentOpenRole = role;
    this.isActiveOpenCUD = true;

    if (role == 3) {
      let dataUpdate = {
        id: this.selectedId,
        name: this.dataSet.find((row: TableItem[]) => row[0].data === this.selectedId)[1].data,
        description: this.dataSet.find((row: TableItem[]) => row[0].data === this.selectedId)[2].data.description,
      };
      console.log('Data Update:', dataUpdate.name);
      // this.editForm.patchValue(dataUpdate);
    }
  }

  closeCUD() {
    this.isActiveOpenCUD = false;
  }

  selectedId: string = '';
  selectedRowData: string = '';
  numberIdRole: number = 23;

  onRowSelected(event: any) {
    if (event.selectedRowIndex !== undefined && event.selectedRowIndex > 0) {
      // this.selectedRowData = this.dataSet[event.selectedRowIndex][0].data;
      this.selectedId = this.selectedRowData;
    } else {
      console.log('No row selected');
    }
  }

  addForm = new FormGroup({
    id: new FormControl({value: '', disabled: true}),
    name: new FormControl(''),
    description: new FormControl(''),
  });

  onSubmitAdd() {
    let additem: TableItem[] = [
      new TableItem({data: this.numberIdRole++}),
      new TableItem({data: this.addForm.value.name}),
      new TableItem({data: this.addForm.value.description}),
    ];
    // this.dataSet.push(additem);
    this.addForm.reset();
    // this.model.data = this.dataSet;
    this.isActiveOpenCUD = false;
  }

  editForm = new FormGroup({
    id: new FormControl({value: '', disabled: true}),
    name: new FormControl(''),
    description: new FormControl(''),
  });

  editFormRole() {
    let form: TableItem[] = [
      new TableItem({data: this.selectedId}),
      new TableItem({data: this.editForm.value.name}),
      new TableItem({data: this.editForm.value.description}),
    ];
    let rowIndex = this.dataSet.findIndex((row: TableItem[]) => row[0].data === this.selectedId);
    if (rowIndex !== -1) {
      // this.dataSet[rowIndex] = form;
      this.store.dispatch(RoleActions.updateRole({
        id: this.selectedId,
        role: {
          id: this.selectedId,
          name: this.editForm.value.name,
          description: this.editForm.value.description,
        },
      }));
    }
    this.model.data = this.dataSet;
    this.isActiveOpenCUD = false;
  }

  deleteData() {
    if (this.selectedId !== undefined) {
      // let rowIndex = this.dataSet.findIndex((row: TableItem[]) => row[0].data === this.selectedId);
      // if (rowIndex !== -1) {
      //   this.dataSet.splice(rowIndex, 1);
      //   this.model.data = this.dataSet;
      // }
    } else {
      console.log('No data');
    }
  }
}
