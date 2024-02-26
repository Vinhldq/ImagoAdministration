import {Component, Input, OnInit} from '@angular/core';
import {
  PaginationModel,
  PaginationModule,
  TableHeaderItem,
  TableItem,
  TableModel,
  TableModule
} from "carbon-components-angular";

@Component({
  selector: 'app-role-category',
  standalone: true,
  imports: [
    PaginationModule,
    TableModule
  ],
  templateUrl: './role-category.component.html',
  styleUrl: './role-category.component.scss'
})
export class RoleCategoryComponent implements OnInit {
  @Input() modelUserListRole = new TableModel();
  @Input() striped = false;
  @Input() sortable = false;
  @Input() isDataGrid = false;
  @Input() stickyHeader = false;
  @Input() skeleton = false;
  disabled = false;
  @Input() modelPagination = new PaginationModel();
  @Input() disabledPagination = false;
  @Input() pageInputDisabled = false;

  dataSetUserListRole = [
    [
      new TableItem({data: " 1"}),
      new TableItem({data: "ThinhXeo"}),
    ], [
      new TableItem({data: " 2"}),
      new TableItem({data: "Admin"}),
    ], [
      new TableItem({data: " 3"}),
      new TableItem({data: "Admin Post"}),
    ],
    [
      new TableItem({data: "4"}),
      new TableItem({data: "Admin Setting"}),
    ],
    [
      new TableItem({data: "5"}),
      new TableItem({data: "Viewer"}),
    ],
    [
      new TableItem({data: "6"}),
      new TableItem({data: "Super Admin"}),
    ],
    [
      new TableItem({data: "7"}),
      new TableItem({data: "Admin Dashboard"}),
    ],
    [
      new TableItem({data: "8"}),
      new TableItem({data: "Admin User"}),
    ],
    [
      new TableItem({data: "9"}),
      new TableItem({data: "Admin Role"}),
    ],
    [
      new TableItem({data: "10"}),
      new TableItem({data: "Admin Report"}),
    ],
    [
      new TableItem({data: "8"}),
      new TableItem({data: "Admin User"}),
    ],
    [
      new TableItem({data: "9"}),
      new TableItem({data: "Admin Role"}),
    ],
    [
      new TableItem({data: "10"}),
      new TableItem({data: "Admin Report"}),
    ],
  ];
  dataChoose: TableItem[][] = [];
  dataLength = this.dataSetUserListRole.length;
  dataLengthPerPage = 10;
  dataResidual = this.dataLength % this.dataLengthPerPage;

  ngOnInit(): void {
    this.modelUserListRole.data = this.dataSetUserListRole;

    this.modelUserListRole.header = [
      new TableHeaderItem({data: "Id"}),
      new TableHeaderItem({data: "UserName"}),
    ];

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
        this.dataSetUserListRole = [
          ...this.dataSetUserListRole,
          [
            new TableItem({data: ''}),
            new TableItem({data: ''}),
          ],
        ];
      }
    }

    for (let i = 0; i < this.dataLengthPerPage; i++) {
      this.dataChoose = [...this.dataChoose, this.dataSetUserListRole[i]];
    }

    this.modelUserListRole.data = this.dataChoose;
  }

  selectPage(page: number) {
    let beginGet = (page - 1) * this.dataLengthPerPage;
    let endGet = page * this.dataLengthPerPage - 1;
    this.modelPagination.currentPage = page;
    this.dataChoose = [];
    if (endGet > this.dataLength) {
      endGet = this.dataLength - 1;
    }
    for (let i = beginGet; i <= endGet; i++) {
      this.dataChoose = [...this.dataChoose, this.dataSetUserListRole[i]];
    }
    this.modelUserListRole.data = this.dataChoose;
  }
}
