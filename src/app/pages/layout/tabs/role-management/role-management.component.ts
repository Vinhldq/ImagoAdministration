import {AfterViewInit, Component, Input, OnChanges, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SharedModule} from '../../../../shared/shared.module';
import {
  IconService,
  ListItem,
  PaginationModel,
  TableHeaderItem,
  TableItem,
  TableModel
} from 'carbon-components-angular';
import Filter20 from '@carbon/icons/es/filter/20';
import TrashCan20 from '@carbon/icons/es/trash-can/20';
import Close20 from '@carbon/icons/es/close/20';
import Edit20 from '@carbon/icons/es/edit/20';
import {AsyncPipe, NgClass} from "@angular/common";
import {RoleCategoryComponent} from "./components/role-category/role-category.component";
import {FormControl, FormGroup} from "@angular/forms";
import {ReactiveFormsModule} from '@angular/forms';
import {RoleState} from "../../../../ngrx/role/role.state";
import {Store} from "@ngrx/store";
import * as RoleActions from "../../../../ngrx/role/role.action";
import {RoleDomain, RolePagination} from "../../../../ngrx/role/role.domain";
import {Observable, Subscription} from "rxjs";
import * as AuthActions from "../../../../ngrx/auth/auth.action";
import {AuthService} from "../../../../service/auth.service";
import {AuthState} from "../../../../ngrx/auth/auth.state";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";


@Component({
  selector: 'app-role-management',
  standalone: true,
  imports: [SharedModule, NgClass, RoleCategoryComponent, ReactiveFormsModule, AsyncPipe],
  templateUrl: './role-management.component.html',
  styleUrl: './role-management.component.scss',
})
export class RoleManagementComponent implements OnInit, OnChanges, AfterViewInit {
  constructor(
    protected iconService: IconService,
    private store: Store<{ role: RoleState, auth: AuthState }>
  ) {
    this.iconService.registerAll([Filter20, TrashCan20, Close20, Edit20]);
  }

  subscription: Subscription[] = [];

  ngOnInit(): void {
    this.roles$.subscribe((roles) => {
        if (roles.length > 0) {
          this.dataSet = roles.map((role: RolePagination) => {
              return [
                new TableItem({data: role.data.map((role: RoleDomain) => role.id)}),
                new TableItem({data: role.data.map((role: RoleDomain) => role.name)}),
                new TableItem({data: role.data.map((role: RoleDomain) => role.description)}),
              ];
            }
          );
          this.model.data = this.dataSet;
        }
        console.log('Role:', roles);
      }
    );
    this.roles$.subscribe((roles) => {
        roles.map((role: RolePagination) => {
          this.page = role.endPage;
        });
      }
    );
    this.subscription.push(
      this.store.select('auth', 'idToken').subscribe((token) => {
        if (token != '') {
          this.store.dispatch(RoleActions.getAllRole({
              token: token,
              page: this.page
            }
          ));
        }
      }),
    );
    console.log('Role:', this.roles$);

    this.model.header = [
      new TableHeaderItem({data: "Id"}),
      new TableHeaderItem({data: "Name"}),
      new TableHeaderItem({data: "Describe"}),
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

  roles$ = this.store.select(state => state.role.roles);
  loading$ = this.store.select(state => state.role.loading);
  error$ = this.store.select(state => state.role.error);

  @Input() model = new TableModel();
  disabled = false;
  @Input() size = "md";
  @Input() showSelectionColumn = true;
  @Input() enableSingleSelect = true;
  @Input() striped = false;
  @Input() sortable = false;
  @Input() isDataGrid = false;
  @Input() noData = false;
  @Input() stickyHeader = false;
  @Input() skeleton = false;
  @Input() ariaLabelledby = "table";
  @Input() ariaDescribedby = "desc";
  @Input() invalid = true;
  @Input() placeholder = "Content";
  @Input() invalidText = "";
  @Input() dropUp = false;
  @Input() warn = false;
  @Input() theme = "dark";
  @Input() warnText = "This is a warning";

  @Input() modelPagination = new PaginationModel();
  @Input() disabledPagination = false;
  @Input() pageInputDisabled = false;

  @ViewChild("overflowMenuItemTemplate", {static: false})
  protected overflowMenuItemTemplate: TemplateRef<any> | undefined;
  @ViewChild("overflowMenuItemTemplateRemove", {static: false})
  protected overflowMenuItemTemplateRemove: TemplateRef<any> | undefined;
  @ViewChild("overflowMenuItemTemplateEdit", {static: false})
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
    //   [
    //     new TableItem({data: " 3"}),
    //     new TableItem({data: "Admin Post"}),
    //     new TableItem({data: "Role Admin Post"}),
    //   ],
    //   [
    //     new TableItem({data: "4"}),
    //     new TableItem({data: "Admin Setting"}),
    //     new TableItem({data: "Role Admin Setting"}),
    //   ],
    //   [
    //     new TableItem({data: "5"}),
    //     new TableItem({data: "Viewer"}),
    //     new TableItem({data: "Role Viewer"}),
    //   ],
    //   [
    //     new TableItem({data: "6"}),
    //     new TableItem({data: "Super Admin"}),
    //     new TableItem({data: "Super Admin"}),
    //   ],
    //   [
    //     new TableItem({data: "7"}),
    //     new TableItem({data: "Admin Dashboard"}),
    //     new TableItem({data: "Role Admin Dashboard"}),
    //   ],
    //   [
    //     new TableItem({data: "8"}),
    //     new TableItem({data: "Admin User"}),
    //     new TableItem({data: "Role Admin User"}),
    //   ],
    //   [
    //     new TableItem({data: "9"}),
    //     new TableItem({data: "Admin Role"}),
    //     new TableItem({data: "Role Admin Role"}),
    //   ],
    //   [
    //     new TableItem({data: "10"}),
    //     new TableItem({data: "Admin Report"}),
    //     new TableItem({data: "Role Admin Report"}),
    //   ],
    //   [
    //     new TableItem({data: "11"}),
    //     new TableItem({data: "Admin Report"}),
    //     new TableItem({data: "Role Admin Report"}),
    //   ],
    //   [
    //     new TableItem({data: "12"}),
    //     new TableItem({data: "Admin Report"}),
    //     new TableItem({data: "Role Admin Report"}),
    //   ],
    //   [
    //     new TableItem({data: "13"}),
    //     new TableItem({data: "Admin Report"}),
    //     new TableItem({data: "Role Admin Report"}),
    //   ],
    //   [
    //     new TableItem({data: "14"}),
    //     new TableItem({data: "Admin Report"}),
    //     new TableItem({data: "Role Admin Report"}),
    //   ],
    //   [
    //     new TableItem({data: "15"}),
    //     new TableItem({data: "Admin Report"}),
    //     new TableItem({data: "Role Admin Report"}),
    //   ],
    //   [
    //     new TableItem({data: "16"}),
    //     new TableItem({data: "Admin Report"}),
    //     new TableItem({data: "Role Admin Report"}),
    //   ],
    //   [
    //     new TableItem({data: "17"}),
    //     new TableItem({data: "Admin Report"}),
    //     new TableItem({data: "Role Admin Report"}),
    //   ],
    //   [
    //     new TableItem({data: "18"}),
    //     new TableItem({data: "Admin Report"}),
    //     new TableItem({data: "Role Admin Report"}),
    //   ],
    //   [
    //     new TableItem({data: "19"}),
    //     new TableItem({data: "Admin Report"}),
    //     new TableItem({data: "Role Admin Report"}),
    //   ],
    //   [
    //     new TableItem({data: "20"}),
    //     new TableItem({data: "Admin Report"}),
    //     new TableItem({data: "Role Admin Report"}),
    //   ],
    //   [
    //     new TableItem({data: "21"}),
    //     new TableItem({data: "Admin Report"}),
    //     new TableItem({data: "Role Admin Report"}),
    //   ],
    //   [
    //     new TableItem({data: "22"}),
    //     new TableItem({data: "Admin Report"}),
    //     new TableItem({data: "Role Admin Report"}),
    //   ],
  ];

  dataChoose: TableItem[][] = [];
  // dataLength = this.dataSet.length;
  dataLengthPerPage = 10;

  // dataResidual = this.dataLength % this.dataLengthPerPage;


  filterNodeNames(searchString: string) {
    // this.model.data = this.dataSet
    //   .filter((row: TableItem[]) => row[1].data.toLowerCase().includes(searchString.toLowerCase()));
  }

  selectPage(page: number) {
    let beginGet = (page - 1) * this.dataLengthPerPage;
    let endGet = page * this.dataLengthPerPage - 1;
    this.modelPagination.currentPage = page;
    this.dataChoose = [];
    // if (endGet > this.dataLength) {
    //   endGet = this.dataLength - 1;
    // }
    for (let i = beginGet; i <= endGet; i++) {
      // this.dataChoose = [...this.dataChoose, this.dataSet[i]];
    }
    this.model.data = this.dataChoose;
  }

  isActiveOpenCUD: boolean = false;
  currentOpenRole = 1;

  openCUD(role: number) {
    this.currentOpenRole = role;
    this.isActiveOpenCUD = true;

    if (role == 3) {
      let dataUpdate = {
        id: this.selectedId,
        // name: this.dataSet.find((row: TableItem[]) => row[0].data === this.selectedId)[1].data,
        // description: this.dataSet.find((row: TableItem[]) => row[0].data === this.selectedId)[2].data,
      }
      this.editForm.patchValue(dataUpdate);
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
      this.selectedId = this.selectedRowData
    } else {
      console.log('No row selected')
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
    ]
    // let rowIndex = this.dataSet.findIndex((row: TableItem[]) => row[0].data === this.selectedId);
    // if (rowIndex !== -1) {
    //   this.dataSet[rowIndex] = form;
    // }
    // this.model.data = this.dataSet;
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
      console.log('No data')
    }
  }
}



